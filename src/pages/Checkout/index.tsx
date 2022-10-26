import {
  CurrencyDollarSimple,
  CreditCard,
  Money,
  Bank,
  MapPinLine,
} from 'phosphor-react'

import * as S from './styles'

export function Checkout() {
  return (
    <main className="mt-[104px] pt-10 h-full mx-auto max-w-[1120px] flex gap-8">
      <section className="bg-red-100 w-full max-w-[640px]">
        <h1 className="text-base-subtitle text-title-xs mb-[15px]">
          Complete seu pedido
        </h1>

        <div className="flex flex-col">
          <div className="flex flex-col gap-y-8 p-10 bg-base-card rounded space-y-8">
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

            <form className="grid">
              <S.Input type="text" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </form>
          </div>

          <div>
            <header>
              <h2>
                <span>
                  <CurrencyDollarSimple />
                </span>
                Pagamento
              </h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </header>

            <div>
              <div>
                <CreditCard />
                <span>Cartão de crédito</span>
              </div>

              <div>
                <Bank />
                <span>Cartão de débito</span>
              </div>

              <div>
                <Money />
                <span>Dinheiro</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-100">
        <h1 className="text-base-subtitle text-title-xs mb-[15px]">
          Cafés selecionados
        </h1>

        <div className="flex flex-col gap-y-8 p-10 bg-base-card rounded space-y-8 w-full min-w-[448px]"></div>
      </section>
    </main>
  )
}
