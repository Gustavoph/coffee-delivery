import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <div className="mt-[104px] h-full mx-auto max-w-[1120px]">
      <div className="flex pt-20 justify-between">
        <section>
          <h1 className="text-yellow-dark text-title-l">
            Uhu! Pedido confirmado
          </h1>
          <p className="text-subtitle-base text-text-l">
            Agora é só aguardar que logo o café chegará até você
          </p>

          <div className="w-[526px] bg-gradient-to-r from-yellow-dark to-purple-dark rounded-md rounded-tr-[36px] rounded-bl-[36px] p-[1px] mt-10">
            <div className="rounded-md rounded-tr-[36px] rounded-bl-[36px] p-10 bg-white space-y-8">
              <div className="flex gap-3 items-center">
                <div className="rounded-full bg-purple h-8 w-8 flex justify-center items-center">
                  <MapPin size={16} className="text-white" weight="fill" />
                </div>
                <div>
                  <p className="text-base-text text-text-m">
                    Entrega em{' '}
                    <span className="font-bold">
                      Rua João Daniel Martinelli, 102
                    </span>
                  </p>
                  <p className="text-base-text text-text-m">
                    Farrapos - Porto Alegre, RS
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="rounded-full bg-yellow h-8 w-8 flex justify-center items-center">
                  <Timer size={16} className="text-white" weight="fill" />
                </div>
                <div>
                  <p className="text-base-text text-text-m">
                    Previsão de entrega
                  </p>
                  <p className="text-base-text text-text-m">
                    <span className="font-bold">
                      Farrapos - Porto Alegre, RS
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="rounded-full bg-yellow-dark h-8 w-8 flex justify-center items-center">
                  <CurrencyDollar
                    size={16}
                    weight="fill"
                    className="text-white"
                  />
                </div>
                <div>
                  <p className="text-base-text text-text-m">
                    Pagamento na entrega Rua João Daniel Martinelli, 102
                  </p>
                  <p className="text-base-text text-text-m">
                    <span className="font-bold">Cartão de Crédito</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-end">
          <img src="/motoboy.svg" alt="Entregador em uma moto" />
        </section>
      </div>
    </div>
  )
}
