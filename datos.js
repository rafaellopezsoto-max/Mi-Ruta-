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
        { name: 'René Ortiz C., Pase Corena', lat: 32.3328, lng: -117.056 },
        { name: 'Boulevard Benito Juárez 10001', lat: 32.3321, lng: -117.0514 },
        { name: 'Puente Machado', lat: 32.3414, lng: -117.0531 },
        { name: 'Calimax Villa Floresta', lat: 32.345, lng: -117.0537 },
        { name: 'Pabellón Rosarito', lat: 32.3769, lng: -117.0606 },
       { name: 'COBACH Rosarito Norte', lat: 32.3852, lng: -117.0596 },
        { name: 'Calimax Rosarito Norte', lat: 32.3936, lng: -117.0587 },
        { name: 'El Florido – Rosarito Norte', lat: 32.4019, lng: -117.0577 },
        { name: 'Ejido Plan Libertador', lat: 32.4102, lng: -117.0567 },
        { name: 'Loma Blanca', lat: 32.4185, lng: -117.0558 },
        { name: 'Santa Fe', lat: 32.4269, lng: -117.0548 },
        { name: 'Urbi Quinta Versalles', lat: 32.4352, lng: -117.0538 },
        { name: 'Lázaro Cárdenas', lat: 32.4435, lng: -117.0529 },
        { name: 'Soriana Súper La Gloria', lat: 32.4519, lng: -117.0519 },
        { name: 'Guardería La Gloria', lat: 32.4602, lng: -117.0510 },
        { name: 'Taxis Verdes y Amarillos de Rosarito', lat: 32.4685, lng: -117.050 },
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
        { name: 'Rosarito', lat: 32.3669, lng: -117.0611 },
        { name: 'Pabellón Rosarito', lat: 32.37685, lng: -117.06055 },
        { name: 'Plaza Las Alondras', lat: 32.44993, lng: -117.0253 },
        { name: 'La Gloria', lat: 32.45099, lng: -117.00205 },
        { name: 'Puente Nodo Morelos', lat: 32.458, lng: -117.015 },
        { name: 'El Pacífico', lat: 32.462, lng: -117.009 },
        { name: 'Panamericano', lat: 32.4671, lng: -117.00606 },
        { name: '5 y 10', lat: 32.5019, lng: -116.9642 },
        { name: 'Central de Autobuses Tijuana', lat: 32.5148, lng: -117.003 },
        { name: 'Instituto Tecnológico Tomás Aquino', lat: 32.5258, lng: -116.9695 },
        { name: 'Calzada del Tecnológico', lat: 32.52866, lng: -116.97834 },
        { name: 'Plaza Alameda', lat: 32.532, lng: -116.956 },
        { name: 'Otay (Oeste)', lat: 32.5325, lng: -116.958 },
        { name: 'Clínica 36 (IMSS)', lat: 32.53336, lng: -116.95253 },
        { name: 'UABC Otay (Oeste)', lat: 32.53436, lng: -116.95545 },
        { name: 'Parque Industrial FINSA', lat: 32.535, lng: -116.969 },
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
