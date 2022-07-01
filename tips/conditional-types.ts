/**
 * @credit Matt Pocock
 */

type Animal = {
  name: string
}

type Human = {
  firstName: string
  lastName: string
}

type GetRequiredInformation<TType> = TType extends Animal
  ? { age: number }
  : TType extends Human
  ? {
      socialSecurityNumber: string
    }
  : never

export type RequiredInformationForAnimal = GetRequiredInformation<Animal>

export type RequiredInformationForHuman = GetRequiredInformation<Human>
