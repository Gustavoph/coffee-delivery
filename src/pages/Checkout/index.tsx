import { TextInput } from '@/components'
import { CurrencyDollarSimple, Money, Bank, MapPinLine } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { CoffeeCard } from './components/CoffeeCard'
import { PaymentCard } from './components/PaymentCard'
import { coffees } from '@/data/coffees'

export function Checkout() {
  const navigate = useNavigate()

  function handleComplete() {
    navigate('/success')
  }

  return (
    <main className="mt-[104px] pt-10 h-full mx-auto max-w-[1120px] flex gap-8">
      <section className="bg-red-100 w-full max-w-[640px]">
        <h1 className="text-base-subtitle text-title-xs mb-[15px]">
          Complete seu pedido
        </h1>

        <section className="flex flex-col space-y-3">
          <section className="flex flex-col gap-y-8 p-10 bg-base-card rounded">
            <div className="flex items-start gap-2">
              <MapPinLine size={22} className="text-yellow-dark" />
              <div>
                <p className="text-base-subtitle text-text-m">
                  Endereço de entrega
                </p>
                <p className="text-base-text text-text-s">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </div>

            <form className="grid grid-cols-6 gap-x-3 gap-y-4">
              <TextInput placeholder="CEP" type="number" cls="col-span-2" />

              <TextInput placeholder="Rua" type="text" cls="col-span-6" />

              <TextInput placeholder="Número" type="text" cls="col-span-2" />

              <div className="col-span-4 relative">
                <TextInput type="text" placeholder="Complemento" cls="pr-16" />
                <span className="text-[12px] text-base-label italic absolute right-3 bottom-4">
                  Opcional
                </span>
              </div>

              <TextInput type="text" cls="col-span-2" placeholder="Bairro" />

              <TextInput type="text" cls="col-span-3" placeholder="Cidade" />

              <TextInput type="text" cls="col-span-1" placeholder="UF" />
            </form>
          </section>

          <section className="bg-base-card p-10 rounded-md ">
            <div className="flex items-start gap-2 mb-8">
              <CurrencyDollarSimple size={22} className="text-purple" />
              <div>
                <p className="text-base-subtitle text-text-m">Pagamento</p>
                <p className="text-base-text text-text-s">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>

            <div className="flex gap-x-3">
              <PaymentCard
                type="Cartão de crédito"
                icon={<Money size={16} />}
              />
              <PaymentCard type="Cartão de débito" icon={<Bank size={16} />} />
              <PaymentCard type="Dinheiro" icon={<Money size={16} />} />
            </div>
          </section>
        </section>
      </section>

      <section>
        <h1 className="text-base-subtitle text-title-xs mb-[15px]">
          Cafés selecionados
        </h1>

        <div className="flex flex-col p-10 bg-base-card rounded w-full min-w-[448px] rounded-tr-[44px] rounded-bl-[44px]">
          <CoffeeCard
            id={coffees[0].id}
            name={coffees[0].name}
            photo={coffees[0].photo}
            price={coffees[0].price}
          />

          <div className="flex flex-col gap-y-3 mb-6">
            <p className="text-base-text flex text-text-s">
              <span className="block flex-1">Total de itens</span>
              <span className="block text-text-m">R$ 29,70</span>
            </p>
            <p className="text-base-text flex text-text-s">
              <span className="block flex-1">Entrega</span>
              <span className="block text-text-m">R$ 3,30</span>
            </p>
            <p className="text-base-subtitle flex text-text-l font-bold">
              <span className="block flex-1">Total</span>
              <span className="block text-text-m">R$ 33,00</span>
            </p>
          </div>
          <button
            onClick={handleComplete}
            className="bg-yellow rounded-md py-4 px-2 flex justify-center transition hover:bg-yellow-dark"
          >
            <span className="font-bold text-white text-text-m uppercase">
              Confirmar pedido
            </span>
          </button>
        </div>
      </section>
    </main>
  )
}
