

const store = [
    {name: 'gps', quantity: 500, type: 'gps'},
    {name: 'mistnet', quantity: 500, type: 'misnet'},
    {name: 'camera', quantity: 200, type: 'camera'},
    {name: 'trap', quantity: 500, type: 'trap'},
    {name: 'binocular', quantity: 500, type: 'binocular'},
   
]


const status =['pending', 'delivered', 'returned']


const lenders = [
    { name: 'abc', type: 'mistnest', quantity: 20, date: new Date(), status: 'pending', dateDue: ''},
    { name: 'defff', type: 'gps', quantity: 20, date: new Date(), status: 'pending', dateDue: ''},
    { name: 'ghiiii', type: 'camera', quantity: 20, date: new Date(), status: 'pending', dateDue: ''},
    { name: 'jkllll', type: 'trap', quantity: 20, date: new Date(), status: 'pending', dateDue: ''},
    { name: 'mnooooo', type: 'gps', quantity: 20, date: new Date(), status: 'pending', dateDue: ''},
]

const gpsLenders = lenders.filter((lender) => lender.type === 'gps')
const mistnetLenders = lenders.filter((lender) => lender.type === 'mistnet')
const cameraLenders = lenders.filter((lender) => lender.type === 'binocular')

let availableGps = 0
for(let i = 0; i< gpsLenders.length; i++) {
    availableGps  += gpsLenders[i].quantity
}

