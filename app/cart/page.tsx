import PageHeader from "@/components/Layouts/PageHeader"
import CartList from "@/components/Sections/Cart/CartList"

const Cart = () => {
  return (
    <>
      <PageHeader title="Added Vehicle(s)" />

      <CartList />
    </>
  )
}

export default Cart