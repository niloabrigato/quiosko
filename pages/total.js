import { useEffect, useCallback } from 'react'
import Layout from '../layout/Layout'
import useQuiosco from '../hooks/useQuiosco'
import { formatearDinero } from '../helpers'

export default function Total() {
  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === '' || nombre.length < 3
  }, [pedido, nombre])

  useEffect(() => {
    comprobarPedido()
  }, [pedido, comprobarPedido])

  return (
    <>
      <Layout pagina="Total y Confirmar Pedido">
        <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
        <p className="text-2xl my-10">Confirma tu pedido a continuación</p>

        <form onSubmit={colocarOrden}>
          <div>
            <label
              htmlFor="nombre"
              className="uppercase font-bold text-xl block text-slate-800"
            >
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full mt-3 p-2 bg-gray-200 rounded-md lg:w-1/3"
            />
          </div>
          <div className="mt-10">
            <p className="text-2xl">
              Total a pagar {''}{' '}
              <span className="font-bold">{formatearDinero(total)}</span>
            </p>
          </div>
          <div className="mt-5">
            <input
              type="submit"
              className={`${
                comprobarPedido()
                  ? 'bg-indigo-100'
                  : 'bg-indigo-600 hover:bg-indigo-800'
              } w-full rounded-md text-white py-2 px-5 lg:w-auto font-bold uppercase text-center"`}
              value="Confirmar Pedido"
              disabled={comprobarPedido()}
            />
          </div>
        </form>
      </Layout>
    </>
  )
}
