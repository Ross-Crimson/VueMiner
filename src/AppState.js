import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**  {{name, picture, id}} user info from Auth0*/
  //user: null,
  /** {import('./models/Account.js').Account}user info from the database*/
  //account: null,

  cheese: 0,

  clickUpgrades: [
    new Upgrade({
      id: 0,
      name: 'PickAxe',
      price: 10,
      quantity: 0,
      multiplier: 1
    }),
    new Upgrade({
      id: 1,
      name: 'Nitro Drill',
      price: 25,
      quantity: 0,
      multiplier: 2
    })
  ],

  autoUpgrades: [
    new Upgrade({
      id: 0,
      name: 'Miner',
      price: 20,
      quantity: 0,
      multiplier: 2
    }),
    new Upgrade({
      id: 1,
      name: 'Mega Mole',
      price: 50,
      quantity: 0,
      multiplier: 3
    })
  ]
})
