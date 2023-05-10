import Layout from '../layout/Layout'
import useQuiosco from '../hooks/useQuiosco'
import Producto from '../components/Producto'

export default function Home() {
  const { categoriaactual } = useQuiosco()

  return (
    <Layout pagina={`Menú ${categoriaactual?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaactual?.nombre}</h1>
      <p className="text-2xl my-10">
        Elije y personaliza tu pedido a continuación
      </p>
      <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {categoriaactual?.productos?.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </Layout>
  )
}
