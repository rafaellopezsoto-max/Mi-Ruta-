module.exports = {

  routes: [
    {
      name: 'Rosarito → Centro Tijuana',
      description: 'Combi de pasajeros, Playas de Rosarito a Centro de Tijuana',
      color: '#f6c945',
      vehicleLabel: 'Blanco y Amarillo',
      fares: [
        { label: 'Bajas en Rosarito', price: 25 },
        { label: 'Bajas en Tijuana', price: 30 },
      ],
      stops: [
          { name: 'Inicio Bulevar Benito Juárez', lat: 32.3328, lng: -117.0560 },
          { name: 'Pabellón Rosarito', lat: 32.3769, lng: -117.0606 },
          { name: 'Ejido Plan Libertador', lat: 32.4102, lng: -117.0567 },
          { name: 'Santa Fe / La Gloria', lat: 32.4269, lng: -117.0548 },
          { name: '5 y 10 (Tijuana)', lat: 32.4920, lng: -116.9720 },
          { name: 'Blvd. Lázaro Cárdenas 5538 (La Esmeralda)', lat: 32.4950, lng: -116.9650 }
      ],
    },
    {
      name: 'Rosarito → 5 y 10 - UABC',
      description: 'Combi de pasajeros, Playas de Rosarito a UABC vía bulevar 5 y 10',
      color: '#2f9e6b',
      vehicleLabel: 'Verde',
      fares: [
        { label: 'Rosarito → 5 y 10', price: 17 },
        { label: 'Rosarito → UABC', price: 24 },
        { label: '5 y 10 → UABC', price: 15 },
      ],
      stops: [
        { name: 'Rosarito Centro', lat: 32.3669, lng: -117.0611 },
        { name: 'La Gloria', lat: 32.4509, lng: -117.0020 },
        { name: 'El Pacífico', lat: 32.4620, lng: -117.0090 },
        { name: '5 y 10', lat: 32.5019, lng: -116.9642 },
        { name: 'Instituto Tecnológico Tomás Aquino', lat: 32.5258, lng: -116.9695 },
        { name: 'UABC Otay', lat: 32.5343, lng: -116.9554 },
      ],
    },
  ],

  drivers: [
    { name: 'Juan Pérez', phone: '661-000-0000' },
  ],

  units: [
    { plate: 'ABC-123', capacity: 30 },
  ],

  assignments: [
    { unitPlate: 'ABC-123', driverName: 'Juan Pérez', routeName: 'Rosarito → Centro Tijuana' },
  ],

};
