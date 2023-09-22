import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CheckoutContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string(),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function CheckoutPage() {
  const confirmOrderForm = useForm({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data)
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer
        className='container'
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  )
}
