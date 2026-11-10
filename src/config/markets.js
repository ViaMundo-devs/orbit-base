'use strict';
// Configuração de DEMONSTRAÇÃO. Em produção, mercado, moeda e idioma são dados por organização.
const OrbitMarkets = Object.freeze({
  BR: {locale:'pt-BR',currency:'BRL',timeZone:'America/Sao_Paulo'},
  MX: {locale:'es-MX',currency:'MXN',timeZone:'America/Mexico_City'},
  CO: {locale:'es-CO',currency:'COP',timeZone:'America/Bogota'},
  CL: {locale:'es-CL',currency:'CLP',timeZone:'America/Santiago'},
  US: {locale:'en-US',currency:'USD',timeZone:'America/New_York'}
});
const OrbitConfig = {market:'BR', ...OrbitMarkets.BR, basePrice:29.90};
