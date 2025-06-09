import PageHeader from "@/components/Layouts/PageHeader"
import CartCheckout from "@/components/Sections/Cart/CartCheckout"

const Checkout = () => {
  return (
    <>
      <PageHeader title="Payment" />

      <CartCheckout />
    </>
  )
}

export default Checkout