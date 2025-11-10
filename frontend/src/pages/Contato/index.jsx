import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import api from '../../Api/api.js'

import { toast } from 'react-toastify'

const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/

const schema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório.'),
  email: yup.string().email('Email inválido.').required('Email é obrigatório.'),
  telefone: yup
    .string()
    .matches(phoneRegex, 'Telefone inválido. Use DDD (ex: (11) 91234-5678).')
    .required('Telefone é obrigatório.'),
  mensagem: yup.string().required('Mensagem não pode ser vazia.')
})

export default function Contato() {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const res = await api.post('/Clientes', data)
      if (res.status === 201) {
        toast.success('Mensagem enviada com sucesso.')
        reset()
      } else {
        toast.error(res.data?.message || 'Erro ao enviar. Tente novamente.')
      }
    } catch (err) {
      const status = err.response?.status
      if (status === 409) {
        toast.error(err.response.data?.message || 'Cliente já cadastrado.')
      } else {
        toast.error('Erro de rede ou servidor. Verifique a API.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
      <h2>Fale Conosco</h2>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>
          Nome
          <input type="text" {...register('nome')} aria-invalid={!!errors.nome} />
          {errors.nome && <small className="error">{errors.nome.message}</small>}
        </label>

        <label>
          E-mail
          <input type="email" {...register('email')} aria-invalid={!!errors.email} />
          {errors.email && <small className="error">{errors.email.message}</small>}
        </label>

        <label>
          Telefone
          <input placeholder="(11) 91234-5678" {...register('telefone')} aria-invalid={!!errors.telefone} />
          {errors.telefone && <small className="error">{errors.telefone.message}</small>}
        </label>

        <label>
          Mensagem
          <textarea rows="4" {...register('mensagem')} aria-invalid={!!errors.mensagem} />
          {errors.mensagem && <small className="error">{errors.mensagem.message}</small>}
        </label>

        <div className="form-actions">
          <button className="btn" type="submit" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </form>
    </section>
  )
}