import Image from 'next/image'
import axios from 'axios'
import { toast } from 'react-toastify'
import { formatearDinero } from '../helpers'

const Orden = ({ orden }) => {
  const { id, nombre, total, pedido } = orden

  const completarOrden = async () => {
    try {
      // const data = await axios.post(`/api/ordenes/${id}`)
      await axios.post(`/api/ordenes/${id}`)
      toast.success('Orden Lista')
    } catch (error) {
      toast.error('Hubo un error')
    }
  }

  return (
    <div className="border p-10 space-y-5">
      <h3 className="text-2xl font-bold">Orden: {id}</h3>
      <p className="text-lg font-bold">Cliente: {nombre}</p>
      <div>
        {pedido.map((platillo) => (
          <div
            className="py-3 flex border-b last-of-type:border-0 items-center"
            key={platillo.id}
          >
            <div className="w-32">
              <Image
                width={400}
                height={500}
                src={`/assets/img/${platillo.imagen}.jpg`}
                alt={`Platillo nombre ${platillo.nombre}`}
              />
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-xl font-bold text-amber-400">
                {platillo.nombre}
              </h4>
              <p className="text-lg font-bold">Cantidad: {platillo.cantidad}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-10  font-black text-4xl text-amber-400">
          Total: {formatearDinero(total)}
        </p>
        <button
          type="button"
          onClick={completarOrden}
          className="uppercase rounded-lg text-white bg-indigo-600 hover:bg-indigo-800 mt-5 py-3 px-10 md:mt-0 font-bold"
        >
          Completar orden
        </button>
      </div>
    </div>
  )
}

export default Orden
