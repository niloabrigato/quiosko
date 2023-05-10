import { PrismaClient } from '@prisma/client'
import Total from '../total'
import { PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER } from 'next/dist/server/api-utils'

export default async function handler(req, res) {
  const prisma = new PrismaClient()

  /** obtener ordenes */
  const ordenes = await prisma.orden.findMany({
    where: {
      estado: false,
    },
  })
  res.status(200).json(ordenes)

  /** crear orden */
  if (req.method === 'POST') {
    const orden = await prisma.orden.create({
      data: {
        nombre: req.body.nombre,
        total: req.body.total,
        pedido: req.body.pedido,
        fecha: req.body.fecha,
      },
    })

    res.status(200).json(orden)
  }
}
