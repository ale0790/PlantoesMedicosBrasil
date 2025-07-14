// Dados dos grupos de plantões médicos
const gruposData = [
  {
    "estado": "RO",
    "microregiao": "Porto Velho",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JQtQjQruaTSHRNKu9Wm4rs",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Guajará-Mirim",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/GtdcZdDpGRE0nsDzmewgIU",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Ariquemes",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/IHkBswQqBrr26J5wWK4tKx",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Ji-Paraná",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/DYgCLgCMi7T79JlmPg7BNW",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Alvorada D'Oeste",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/L2Xi1OLJ6plGOyiZEdKwpl",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Cacoal",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/BhHvqzf2oug7jF3z6Yn7OU",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Vilhena",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/HlPwFHKmyRDHO8QMUGOcWy",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Colorado do Oeste",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/FyVr7OaRac0JHv59cv4NF1",
    "status": "Ativo"
  },
  {
    "estado": "AC",
    "microregiao": "Cruzeiro do Sul",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "AC",
    "microregiao": "Tarauacá",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "AC",
    "microregiao": "Sena Madureira",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "AC",
    "microregiao": "Rio Branco",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "AC",
    "microregiao": "Brasiléia",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Rio Negro",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Japurá",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Alto Solimões",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Juruá",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Tefé",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Coari",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Manaus",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Rio Preto da Eva",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Itacoatiara",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Parintins",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Boca do Acre",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Purus",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Madeira",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "RR",
    "microregiao": "Boa Vista",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "RR",
    "microregiao": "Nordeste de Roraima",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "RR",
    "microregiao": "Caracaraí",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "RR",
    "microregiao": "Sudeste de Roraima",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Óbidos",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Santarém",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Almeirim",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Portel",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Furos de Breves",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Arari",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Belém",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Castanhal",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Salgado",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Bragantina",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Cametá",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Tomé-Açu",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Guamá",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Itaituba",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Altamira",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Tucuruí",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Paragominas",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "São Félix do Xingu",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Parauapebas",
    "link": "#",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Marabá",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Redenção",
    "estado": "PA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Conceição do Araguaia",
    "estado": "PA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Oiapoque",
    "estado": "AP",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Amapá",
    "estado": "AP",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Macapá",
    "estado": "AP",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Mazagão",
    "estado": "AP",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Bico do Papagaio",
    "estado": "TO",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Araguaína",
    "estado": "TO",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Miracema do Tocantins",
    "estado": "TO",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Rio Formoso",
    "estado": "TO",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Gurupi",
    "estado": "TO",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Porto Nacional",
    "estado": "TO",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Jalapão",
    "estado": "TO",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Dianópolis",
    "estado": "TO",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral Ocidental Maranhense",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Aglomeração Urbana de São Luís",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Rosário",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Lençóis Maranhenses",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Baixada Maranhense",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Itapecuru Mirim",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Gurupi",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Pindaré",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Imperatriz",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Médio Mearim",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Alto Mearim e Grajaú",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Presidente Dutra",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Baixo Parnaíba Maranhense",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapadinha",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Codó",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Coelho Neto",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Caxias",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapadas do Alto Itapecuru",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Porto Franco",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Gerais de Balsas",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapadas das Mangabeiras",
    "estado": "MA",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Baixo Parnaíba Piauiense",
    "estado": "PI",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral Piauiense",
    "estado": "PI",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Teresina",
    "estado": "PI",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Campo Maior",
    "estado": "PI",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Médio Parnaíba Piauiense",
    "estado": "PI",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Valença do Piauí",
    "estado": "PI",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Alto Parnaíba Piauiense",
    "estado": "PI",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Bertolínia",
    "estado": "PI",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Floriano",
    "estado": "PI",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Alto Médio Gurguéia",
    "estado": "PI",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "São Raimundo Nonato",
    "estado": "PI",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapadas do Extremo Sul Piauiense",
    "estado": "PI",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Picos",
    "estado": "PI",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Pio IX",
    "estado": "PI",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Alto Médio Canindé",
    "estado": "PI",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral de Camocim e Acaraú",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Ibiapaba",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Coreaú",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Meruoca",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Sobral",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Ipu",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Santa Quitéria",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Itapipoca",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Baixo Curu",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Uruburetama",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Médio Curu",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Canindé",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Baturité",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Chorozinho",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Cascavel",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Fortaleza",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Pacajus",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Sertão de Cratéus",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Sertão de Quixeramobim",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Sertão de Inhamuns",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Sertão de Senador Pompeu",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral de Aracati",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Baixo Jaguaribe",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Médio Jaguaribe",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Serra do Pereiro",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Iguatu",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Várzea Alegre",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Lavras da Mangabeira",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapada do Araripe",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Caririaçu",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Barro",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Cariri",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Brejo Santo",
    "estado": "CE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Mossoró",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapada do Apodi",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Médio Oeste",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Vale do Açu",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Serra de São Miguel",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Pau dos Ferros",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Umarizal",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Macau",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Angicos",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Serra de Santana",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Seridó Ocidental",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Seridó Oriental",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Baixa Verde",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Borborema Potiguar",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Agreste Potiguar",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral Nordeste",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Macaíba",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Natal",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral Sul",
    "estado": "RN",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Catolé do Rocha",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Cajazeiras",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Sousa",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Patos",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Piancó",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Itaporanga",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Serra do Teixeira",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Seridó Ocidental Paraibano",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Seridó Oriental Paraibano",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Cariri Ocidental",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Cariri Oriental",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Curimataú Ocidental",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Curimataú Oriental",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Esperança",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Brejo Paraibano",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Guarabira",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Campina Grande",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Itabaiana",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Umbuzeiro",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral Norte",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Sapé",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "João Pessoa",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral Sul",
    "estado": "PB",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Araripina",
    "estado": "PE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Salgueiro",
    "estado": "PE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Pajeú",
    "estado": "PE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Sertão do Moxotó",
    "estado": "PE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Petrolina",
    "estado": "PE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Itaparica",
    "estado": "PE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Vale do Ipanema",
    "estado": "PE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Vale do Ipojuca",
    "estado": "PE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Alto Capibaribe",
    "estado": "PE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Médio Capibaribe",
    "estado": "PE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Garanhuns",
    "estado": "PE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Brejo Pernambucano",
    "estado": "PE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Mata Setentrional Pernambucana",
    "estado": "PE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Vitória de Santo Antão",
    "estado": "PE",
    "link": "#",
    "status": "Ativo"
  },
  {
    "microregiao": "Mata Meridional Pernambucana",
    "estado": "PE",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Itamaracá",
    "estado": "PE",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Recife",
    "estado": "PE",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Suape",
    "estado": "PE",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Fernando de Noronha",
    "estado": "PE",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Serrana do Sertão Alagoano",
    "estado": "AL",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Alagoana do Sertão do São Francisco",
    "estado": "AL",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Santana do Ipanema",
    "estado": "AL",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Batalha",
    "estado": "AL",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Palmeira dos Índios",
    "estado": "AL",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Arapiraca",
    "estado": "AL",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Traipu",
    "estado": "AL",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Serrana dos Quilombos",
    "estado": "AL",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Mata Alagoana",
    "estado": "AL",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Litoral Norte Alagoano",
    "estado": "AL",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Maceió",
    "estado": "AL",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "São Miguel dos Campos",
    "estado": "AL",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Penedo",
    "estado": "AL",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Sergipana do Sertão do São Francisco",
    "estado": "SE",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Carira",
    "estado": "SE",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Nossa Senhora das Dores",
    "estado": "SE",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Agreste de Itabaiana",
    "estado": "SE",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Tobias Barreto",
    "estado": "SE",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Agreste de Lagarto",
    "estado": "SE",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Propriá",
    "estado": "SE",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Cotinguiba",
    "estado": "SE",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Japaratuba",
    "estado": "SE",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Baixo Cotinguiba",
    "estado": "SE",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Aracaju",
    "estado": "SE",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Boquim",
    "estado": "SE",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Estância",
    "estado": "SE",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Barreiras",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JnE88RNFRXQ9ckxeI82Ae3",
    "status": "Ativo"
  },
  {
    "microregiao": "Cotegipe",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/HSzMEAxrA72INGVS31IQJt",
    "status": "Ativo"
  },
  {
    "microregiao": "Santa Maria da Vitória",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/CkzbdzVJCoE8a8t6Qp05s8",
    "status": "Ativo"
  },
  {
    "microregiao": "Juazeiro",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/DMEi5pi2out4a3w8Wr3Mtj",
    "status": "Ativo"
  },
  {
    "microregiao": "Paulo Afonso",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/Gcg4drEPzp13lqXfuSoMwn",
    "status": "Ativo"
  },
  {
    "microregiao": "Barra",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/DUmhmi0LlO23bKAqegpaF3",
    "status": "Ativo"
  },
  {
    "microregiao": "Bom Jesus da Lapa",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/Lc2KLo871Y1D1I5SKyxPiM",
    "status": "Ativo"
  },
  {
    "microregiao": "Senhor do Bonfim",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/GfIgcy9m9VnI3wzlcKs1aW",
    "status": "Ativo"
  },
  {
    "microregiao": "Irecê",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/EJ42RpzUwJXBjdGwCpH0ct",
    "status": "Ativo"
  },
  {
    "microregiao": "Jacobina",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JjAlTVn1FNK8fhhzk2bY7I",
    "status": "Ativo"
  },
  {
    "microregiao": "Itaberaba",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/L9xoKfAnMYWIrY4BZPHKk5",
    "status": "Ativo"
  },
  {
    "microregiao": "Feira de Santana",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/GJJsEiaQOb1KXDdEjewjVL",
    "status": "Ativo"
  },
  {
    "microregiao": "Jeremoabo",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/BHOy1DVBnbmCHaShhO7ozp",
    "status": "Ativo"
  },
  {
    "microregiao": "Euclides da Cunha",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/HRPFWtVDKJo88tjAIisGNA",
    "status": "Ativo"
  },
  {
    "microregiao": "Ribeira do Pombal",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/DWoShGIEKB5K6ETJfZjL4k",
    "status": "Ativo"
  },
  {
    "microregiao": "Serrinha",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/DqwNKqwfvf3FUvdcXNVyaK",
    "status": "Ativo"
  },
  {
    "microregiao": "Alagoinhas",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/G4WxB7WQsx431LRX1D6RxN",
    "status": "Ativo"
  },
  {
    "microregiao": "Entre Rios",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/I5sn0hd9IpCG6coBIrZrtU",
    "status": "Ativo"
  },
  {
    "microregiao": "Catu",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/LwGnhkWzdXZFldToFnjXqF",
    "status": "Ativo"
  },
  {
    "microregiao": "Santo Antônio de Jesus",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/CuEveVwoJq8H0eA3Id6zCV",
    "status": "Ativo"
  },
  {
    "microregiao": "Salvador",
    "estado": "BA",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/LrGhlCJZFMsL45Bzfg4woK",
    "status": "Ativo"
  },
  {
    "microregiao": "Boquira",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/K9oYzzzZw7WJCA6mqj5cbh",
    "status": "Ativo"
  },
  {
    "microregiao": "Seabra",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/Hwnup4jpz21L36ReAcuIEG",
    "status": "Ativo"
  },
  {
    "microregiao": "Jequié",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/J5vpgRZksNq8WcchE2Ctlx",
    "status": "Ativo"
  },
  {
    "microregiao": "Livramento do Brumado",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/IRJ62TPjCiZ6SZiW0ss67V",
    "status": "Ativo"
  },
  {
    "microregiao": "Guanambi",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/J3STLTCKNqF9rjUkFrv9Cw",
    "status": "Ativo"
  },
  {
    "microregiao": "Brumado",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/EiDJh6nU13qDTUh5DtC3m5",
    "status": "Ativo"
  },
  {
    "microregiao": "Vitória da Conquista",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/IvuBEj9njpsDhH7wCRkiqD",
    "status": "Ativo"
  },
  {
    "microregiao": "Itapetinga",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/LPE4lBWgIEHIgkmO5GN4IA",
    "status": "Ativo"
  },
  {
    "microregiao": "Valença",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/F1iFLIoT810J8WRc6hDmhh",
    "status": "Ativo"
  },
  {
    "microregiao": "Ilhéus-Itabuna",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/ClDu4rU7NHED5UHekZ1Sq7",
    "status": "Ativo"
  },
  {
    "microregiao": "Porto Seguro",
    "estado": "BA",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/FE3LunAPi45GKILlAbTHj5",
    "status": "Ativo"
  },
  {
    "microregiao": "Unaí",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/G3QsU3FFhBeKUGL6qCD9Wz",
    "status": "Ativo"
  },
  {
    "microregiao": "Paracatu",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/KsOrP1iKp09DcZqYDkLN9F",
    "status": "Ativo"
  },
  {
    "microregiao": "Januária",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/KLiaaJ1FfiNDpJa1OzOxFs",
    "status": "Ativo"
  },
  {
    "microregiao": "Janaúba",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JDglsLNApNt1K3zxexYHNW",
    "status": "Ativo"
  },
  {
    "microregiao": "Salinas",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/HSZu30KBG5bEhV1Mp9s27l",
    "status": "Ativo"
  },
  {
    "microregiao": "Pirapora",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/FqGY49V86Y8FCiUmaeSVOq",
    "status": "Ativo"
  },
  {
    "microregiao": "Montes Claros",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/FyfgebrnjhE2DBULQDF9Ce",
    "status": "Ativo"
  },
  {
    "microregiao": "Grão Mogol",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/LkjIdtkYBsB09PtxgTASyf",
    "status": "Ativo"
  },
  {
    "microregiao": "Bocaiúva",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/K4Km3XYcaqCGO0R0jEU5yP",
    "status": "Ativo"
  },
  {
    "microregiao": "Diamantina",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/HDdy5yIiDFzD96R7mTsKIX",
    "status": "Ativo"
  },
  {
    "microregiao": "Capelinha",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/Jy6vo91pMlnGw0KoLuVYrr",
    "status": "Ativo"
  },
  {
    "microregiao": "Araçuaí",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/BkNKTznZ88N227d7lUOwCU",
    "status": "Ativo"
  },
  {
    "microregiao": "Pedra Azul",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/H9GpmvytPAzKZPBqI2xGbt",
    "status": "Ativo"
  },
  {
    "microregiao": "Almenara",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/DAPc8CpTBm43bJmKsSz2ek",
    "status": "Ativo"
  },
  {
    "microregiao": "Teófilo Otoni",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/KErQ4mLnqpK94EVsDT8FA0",
    "status": "Ativo"
  },
  {
    "microregiao": "Nanuque",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/Lq9Fz8ssIYMHphOkK6DrQK",
    "status": "Ativo"
  },
  {
    "microregiao": "Ituiutaba",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/Ims8wElO5Rr5bJX7SfFQF6",
    "status": "Ativo"
  },
  {
    "microregiao": "Uberlândia",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/H0ZLIB7gMNVEPO1nYEWhTy",
    "status": "Ativo"
  },
  {
    "microregiao": "Patrocínio",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/CTezl16QBQv8ud5VcDqDeQ",
    "status": "Ativo"
  },
  {
    "microregiao": "Patos de Minas",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/G3ZFvCACRgg3FjvWSq9qJq",
    "status": "Ativo"
  },
  {
    "microregiao": "Frutal",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/Hz3WLOhk3tHFragyc5fsXb",
    "status": "Ativo"
  },
  {
    "microregiao": "Uberaba",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/DTBtdT1qPbwGLe6UAYIx3T",
    "status": "Ativo"
  },
  {
    "microregiao": "Araxá",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/J5C7Jx9DUvqF4iUI8oFfqj",
    "status": "Ativo"
  },
  {
    "microregiao": "Três Marias",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/LTxBiafVxXL8DQnx8LuCoi",
    "status": "Ativo"
  },
  {
    "microregiao": "Curvelo",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JfVqW6Ypi098QlmPtAk3wB",
    "status": "Ativo"
  },
  {
    "microregiao": "Bom Despacho",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/CX6b04sZyCGFlV7fSiwV5D",
    "status": "Ativo"
  },
  {
    "microregiao": "Sete Lagoas",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/KWA4S2HmTqx5YKhb9puwEI",
    "status": "Ativo"
  },
  {
    "microregiao": "Conceição do Mato Dentro",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/HcVQW0RxvND9nlCpJZYxiW",
    "status": "Ativo"
  },
  {
    "microregiao": "Pará de Minas",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/IaC8v9UD6XW16ot7Aw6w42",
    "status": "Ativo"
  },
  {
    "microregiao": "Belo Horizonte",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/J29rY5lz9b191ZR1KN5Auk",
    "status": "Ativo"
  },
  {
    "microregiao": "Itabira",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/DNxE0tDLxLY7jrmvyDbyuF",
    "status": "Ativo"
  },
  {
    "microregiao": "Itaguara",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/ESCWqiv7xBrDPxDfIJeHn8",
    "status": "Ativo"
  },
  {
    "microregiao": "Ouro Preto",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JrMIFT3INsi3qBprH6Qzmq",
    "status": "Ativo"
  },
  {
    "microregiao": "Conselheiro Lafaiete",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/E2itVJyI2qM1jQTfRcPQWm",
    "status": "Ativo"
  },
  {
    "microregiao": "Guanhães",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/EKVDOdNFXkoAgnmwLkYXE2",
    "status": "Ativo"
  },
  {
    "microregiao": "Peçanha",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/HYm3u2gfIV9BgTxQH2LohK",
    "status": "Ativo"
  },
  {
    "microregiao": "Governador Valadares",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/CVXSVbZMar87Ign8XHzgCS",
    "status": "Ativo"
  },
  {
    "microregiao": "Mantena",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/GKBcX7NfgpMLtVgdRzKLkw",
    "status": "Ativo"
  },
  {
    "microregiao": "Ipatinga",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/HMKeKO4J18z819odjrZgrL",
    "status": "Ativo"
  },
  {
    "microregiao": "Caratinga",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/GDNOWaPC4A2Fx34MoHAnNV",
    "status": "Ativo"
  },
  {
    "microregiao": "Aimorés",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/InDrZZ3f1ck6yNyBi2Pf3z",
    "status": "Ativo"
  },
  {
    "microregiao": "Piuí",
    "estado": "MG",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/F0WJMWlaG4jLWYoSgLe33O",
    "status": "Ativo"
  },
  {
    "microregiao": "Divinópolis",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/BHW2WlvBQIg1R8PsDUUjSS",
    "status": "Ativo"
  },
  {
    "microregiao": "Formiga",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/E3LU2SczQILAV0kzOE2OKs",
    "status": "Ativo"
  },
  {
    "microregiao": "Campo Belo",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/LtArHUUH296E1mxTdBxUUH",
    "status": "Ativo"
  },
  {
    "microregiao": "Oliveira",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JK1VKE4YHMgF2KsFkstOec",
    "status": "Ativo"
  },
  {
    "microregiao": "Passos",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JmOKvZqoP21BBPMhVvWchj",
    "status": "Ativo"
  },
  {
    "microregiao": "São Sebastião do Paraíso",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/EnOSDbeLyAa6pv4LHa9K4X",
    "status": "Ativo"
  },
  {
    "microregiao": "Alfenas",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/FowQTezIVlm3uzIoxrZlLl",
    "status": "Ativo"
  },
  {
    "microregiao": "Varginha",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/FowQTezIVlm3uzIoxrZlLl",
    "status": "Ativo"
  },
  {
    "microregiao": "Poços de Caldas",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/Gc0Egias0VU0F8CPhMBHds",
    "status": "Ativo"
  },
  {
    "microregiao": "Pouso Alegre",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/Ib5kufKkgixCbG0dcRLm4r",
    "status": "Ativo"
  },
  {
    "microregiao": "Santa Rita do Sapucaí",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/LMtldKKxY8J9cbjhuNp8FF",
    "status": "Ativo"
  },
  {
    "microregiao": "São Lourenço",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/CvZBf2RCkES3Jzq470W782",
    "status": "Ativo"
  },
  {
    "microregiao": "Andrelândia",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/KtZwhFuZVuYCVRHe631sLW",
    "status": "Ativo"
  },
  {
    "microregiao": "Itajubá",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/F0IKgJFoHvf7uendrMJ4H0",
    "status": "Ativo"
  },
  {
    "microregiao": "Lavras",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JB0B5QY757nCPyKRm9GTCl",
    "status": "Ativo"
  },
  {
    "microregiao": "São João Del Rei",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/L28hlA6CZx73OaQs0GfUla",
    "status": "Ativo"
  },
  {
    "microregiao": "Barbacena",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/F8QaPuVYUViJgzRNljHgKa",
    "status": "Ativo"
  },
  {
    "microregiao": "Ponte Nova",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/GAjsxfxOpb712oqiWHlx2i",
    "status": "Ativo"
  },
  {
    "microregiao": "Manhuaçu",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/FU8o889V7vUCFwb2fyL8PC",
    "status": "Ativo"
  },
  {
    "microregiao": "Viçosa",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/FcX9sbCaI0MI2u5Kc8GuG8",
    "status": "Ativo"
  },
  {
    "microregiao": "Muriaé",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/EfOdVCbwQatKsbXrtOXEnW",
    "status": "Ativo"
  },
  {
    "microregiao": "Ubá",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/FgrdwgnzZU2H2EIf4uomqH",
    "status": "Ativo"
  },
  {
    "microregiao": "Juiz de Fora",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/HBrV6IywcEtCWv0T9sTsPp",
    "status": "Ativo"
  },
  {
    "microregiao": "Cataguases",
    "estado": "MG",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/KgDARzIchsW3DPqUghIDFW",
    "status": "Ativo"
  },
  {
    "microregiao": "Barra de São Francisco",
    "estado": "ES",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Nova Venécia",
    "estado": "ES",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Colatina",
    "estado": "ES",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Montanha",
    "estado": "ES",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "São Mateus",
    "estado": "ES",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Linhares",
    "estado": "ES",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Afonso Cláudio",
    "estado": "ES",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Santa Teresa",
    "estado": "ES",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Vitória",
    "estado": "ES",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Guarapari",
    "estado": "ES",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Alegre",
    "estado": "ES",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Cachoeiro de Itapemirim",
    "estado": "ES",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Itapemirim",
    "estado": "ES",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Itaperuna",
    "estado": "RJ",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/Cxg3xUqQp2wBInazqFali9",
    "status": "Ativo"
  },
  {
    "microregiao": "Santo Antônio de Pádua",
    "estado": "RJ",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/CmCcNiSX4jO4nb4SX036S4",
    "status": "Ativo"
  },
  {
    "microregiao": "Campos dos Goytacazes",
    "estado": "RJ",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/Hs36IeNaBjh8uEiHAxO0Za",
    "status": "Ativo"
  },
  {
    "microregiao": "Macaé",
    "estado": "RJ",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/BAqbD3npBoZDrlkTZQFPLD",
    "status": "Ativo"
  },
  {
    "microregiao": "Três Rios",
    "estado": "RJ",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/F7CcL1Tbk1MIyrxdQ6E5wU",
    "status": "Ativo"
  },
  {
    "microregiao": "Cantagalo-Cordeiro",
    "estado": "RJ",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/B5DSC5YqErc92ABWOlgxOF",
    "status": "Ativo"
  },
  {
    "microregiao": "Nova Friburgo",
    "estado": "RJ",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/JgYYn3s71pjFu09NCNIcep",
    "status": "Ativo"
  },
  {
    "microregiao": "Santa Maria Madalena",
    "estado": "RJ",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/KmikvsFXv5xDuGDIafQ3oO",
    "status": "Ativo"
  },
  {
    "microregiao": "Bacia de São João",
    "estado": "RJ",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/JKtu1jh7xE91bFlJjTUfM6",
    "status": "Ativo"
  },
  {
    "microregiao": "Lagos",
    "estado": "RJ",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/FyY7iN3zULr12gaXtP4jwP",
    "status": "Ativo"
  },
  {
    "microregiao": "Vale do Paraíba Fluminense",
    "estado": "RJ",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/Ew37XDnNDKuF50VNukVeta",
    "status": "Ativo"
  },
  {
    "microregiao": "Barra do Piraí",
    "estado": "RJ",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/HU3VgtAJirTK8KOMiFa88Y",
    "status": "Ativo"
  },
  {
    "microregiao": "Baía da Ilha Grande",
    "estado": "RJ",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/Gp2XMhwjbO58vbqAgXZrsM",
    "status": "Ativo"
  },
  {
    "microregiao": "Vassouras",
    "estado": "RJ",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/KCktTkzKkDt0Zh2u54AQmU",
    "status": "Ativo"
  },
  {
    "microregiao": "Serrana",
    "estado": "RJ",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/KCVZUYZgfVGEYoGxPt5H5X",
    "status": "Ativo"
  },
  {
    "microregiao": "Macacu-Caceribu",
    "estado": "RJ",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/KgRdJgBUdVH49R6XO2GREy",
    "status": "Ativo"
  },
  {
    "microregiao": "Itaguaí",
    "estado": "RJ",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/GUIbHMinAvSAVpQxSfdSDs",
    "status": "Ativo"
  },
  {
    "microregiao": "Rio de Janeiro",
    "estado": "RJ",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/BC1nb98s8de9wJe8R8tA1X",
    "status": "Ativo"
  },
  {
    "microregiao": "Jales",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/FZr7WVwPN9F9efUk4txv1j",
    "status": "Ativo"
  },
  {
    "microregiao": "Fernandópolis",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JWrWtmpMenF7hw4CXxrznh",
    "status": "Ativo"
  },
  {
    "microregiao": "Votuporanga",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/GXJu0XMwfRK7xGlaFHVSas",
    "status": "Ativo"
  },
  {
    "microregiao": "São José do Rio Preto",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/FvhjeInIvMx2dD4IUbRbk1",
    "status": "Ativo"
  },
  {
    "microregiao": "Catanduva",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/GisCvAm3AhPLucJtTgaPtK",
    "status": "Ativo"
  },
  {
    "microregiao": "Auriflama",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/FY7Y2GWtySMCdniSHQ6zGg",
    "status": "Ativo"
  },
  {
    "microregiao": "Nhandeara",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/IafEuzNKaUzIQpWoVCc11C",
    "status": "Ativo"
  },
  {
    "microregiao": "Novo Horizonte",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/GjaKqgBtl5b2bCH5CyfdqB",
    "status": "Ativo"
  },
  {
    "microregiao": "Barretos",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/BhDsX2ZmQmy74VJ3BS2O1z",
    "status": "Ativo"
  },
  {
    "microregiao": "São Joaquim da Barra",
    "estado": "SP",
    "link": "#",     
    "linkWhats": "https://chat.whatsapp.com/FQ4xWRQ6JxKECaPl6vIQuv",
    "status": "Ativo"
  },
  {
    "microregiao": "Ituverava",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/IjjIfLtWDFqLuoR1vaCG3z",
    "status": "Ativo"
  },
  {
    "microregiao": "Franca",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/FOHtP9J5XFcJKoh2499goH",
    "status": "Ativo"
  },
  {
    "microregiao": "Jaboticabal",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/I7h3KSrH8E46kJxqYAq9pB",
    "status": "Ativo"
  },
  {
    "microregiao": "Ribeirão Preto",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JdWLTBfZNIzLVKfe3za46D",
    "status": "Ativo"
  },
  {
    "microregiao": "Batatais",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/EfEm7suXxe8DlMSwQBPxWF",
    "status": "Ativo"
  },
  {
    "microregiao": "Andradina",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/LHa2oKqrB6TKX93lP38jcC",
    "status": "Ativo"
  },
  {
    "microregiao": "Araçatuba",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/KUNnYrx7ZzP5EnsVi8VwXX",
    "status": "Ativo"
  },
  {
    "microregiao": "Birigui",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/DA6YFiealXmCcLinIsyjZn",
    "status": "Ativo"
  },
  {
    "microregiao": "Lins",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/Ggcew6Y6wsUDQ48E7rmGiM",
    "status": "Ativo"
  },
  {
    "microregiao": "Bauru",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/EFz24ydhDBF6f6JNh5mKtz",
    "status": "Ativo"
  },
  {
    "microregiao": "Jaú",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/HMxDmiNH6oFCFhqaupYyIm",
    "status": "Ativo"
  },
  {
    "microregiao": "Avaré",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/LDZAk6cH0jl3BQoau8nv1s",
    "status": "Ativo"
  },
  {
    "microregiao": "Botucatu",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/HbIMP55bgMl6NfMRWizRuT",
    "status": "Ativo"
  },
  {
    "microregiao": "Araraquara",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/CnKaxHlUhSJLCqQMyqKq7M",
    "status": "Ativo"
  },
  {
    "microregiao": "São Carlos",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/CM5M1mLX7vdKab1f5fF8XO",
    "status": "Ativo"
  },
  {
    "microregiao": "Rio Claro",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/CUy087grHDvINOSCPrt3IC",
    "status": "Ativo"
  },
  {
    "microregiao": "Limeira",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/KYwGJ4Z0uwk9ZHfqbpg0GK",
    "status": "Ativo"
  },
  {
    "microregiao": "Piracicaba",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/F5lMOaumdgOCwWFGtdPgRc",
    "status": "Ativo"
  },
  {
    "microregiao": "Pirassununga",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/IGzNRWjtv3i3u7FHw11dvN",
    "status": "Ativo"
  },
  {
    "microregiao": "São João da Boa Vista",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/GB93pAdHF0u26aYXmKp7bL",
    "status": "Ativo"
  },
  {
    "microregiao": "Mogi Mirim",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JENtZDYqeag85O65iX8aiZ",
    "status": "Ativo"
  },
  {
    "microregiao": "Campinas",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JMQtf8pqjK3AXmhQUF5hHv",
    "status": "Ativo"
  },
  {
    "microregiao": "Amparo",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/FicqCBhDplo3R3oBXeJ5b1",
    "status": "Ativo"
  },
  {
    "microregiao": "Dracena",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/EiI5ayMelRGHzgyNEFk3q9",
    "status": "Ativo"
  },
  {
    "microregiao": "Adamantina",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/GTBUTGN6eXtGajBidMIJu5",
    "status": "Ativo"
  },
  {
    "microregiao": "Presidente Prudente",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/II0OqWo8cruA0VfA3lDpLn",
    "status": "Ativo"
  },
  {
    "microregiao": "Tupã",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/Jcc0FvCQQQaHCGXKrbMV0R",
    "status": "Ativo"
  },
  {
    "microregiao": "Marília",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/LNlxEB9ksIbGJfCIV6ic0g",
    "status": "Ativo"
  },
  {
    "microregiao": "Assis",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/C32AmT6M5h3IyzQBJ8mgWV",
    "status": "Ativo"
  },
  {
    "microregiao": "Ourinhos",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/DvnVS9ZSSS70T16ujLeqH8",
    "status": "Ativo"
  },
  {
    "microregiao": "Itapeva",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/CB7fERSnasm7koMoVJkskG",
    "status": "Ativo"
  },
  {
    "microregiao": "Itapetininga",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JifQzE5xJJk4lccsYTuipj",
    "status": "Ativo"
  },
  {
    "microregiao": "Tatuí",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/KEjvFQkOmCp7xbjYf8XKbE",
    "status": "Ativo"
  },
  {
    "microregiao": "Capão Bonito",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/BV654MoFKDLDPreQ4Rlluv",
    "status": "Ativo"
  },
  {
    "microregiao": "Piedade",
    "estado": "SP",
    "link": "#",   
    "linkWhats": "https://chat.whatsapp.com/DyZlM7n2S8j15vkjmyKyik",
    "status": "Ativo"
  },
  {
    "microregiao": "Sorocaba",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JnGpRK6kMfH3STDb0TKXrB",
    "status": "Ativo"
  },
  {
    "microregiao": "Jundiaí",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/CUH6nPK9E7f17QzrMLOgBS",
    "status": "Ativo"
  },
  {
    "microregiao": "Bragança Paulista",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/Gil2CQHVVi4FrTKkbymw7c",
    "status": "Ativo"
  },
  {
    "microregiao": "Campos do Jordão",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/CQOEDfNNUKy0bhQhcDkr1V",
    "status": "Ativo"
  },
  {
    "microregiao": "São José dos Campos",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/CUJn5fBn0fJGJcIqb77GtD",
    "status": "Ativo"
  },
  {
    "microregiao": "Guaratinguetá",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/DSoIdjRXh7P1NKhSRSFV8h",
    "status": "Ativo"
  },
  {
    "microregiao": "Bananal",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/DPUUKT09SGMCcvxVIN8wgu",
    "status": "Ativo"
  },
  {
    "microregiao": "Paraibuna/Paraitinga",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/H4TQk1xO8luAqMMA58Jn0u",
    "status": "Ativo"
  },
  {
    "microregiao": "Caraguatatuba",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JM3VTfDwTC9J0Xg0irXThX",
    "status": "Ativo"
  },
  {
    "microregiao": "Registro",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/HCLAVtWMyz19URqqP1Q09G",
    "status": "Ativo"
  },
  {
    "microregiao": "Itanhaém",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/ES5A4NYZrCWEIpOr4vcpjr",
    "status": "Ativo"
  },
  {
    "microregiao": "Osasco",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/Ev4OgKMYh6HKGcaFbhTclZ",
    "status": "Ativo"
  },
  {
    "microregiao": "Franco da Rocha",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/I4Rm9JzRaq1CmkLJfrEAXC",
    "status": "Ativo"
  },
  {
    "microregiao": "Guarulhos",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/DmiF2wwytUYJH9KywtOwjr",
    "status": "Ativo"
  },
  {
    "microregiao": "Itapecerica da Serra",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/FOm1WWoa6hSFO4cnct9qqz",
    "status": "Ativo"
  },
  {
    "microregiao": "São Paulo",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/Lf7qUU5AbPzIlvkFT1lwvp",
    "status": "Ativo"
  },
  {
    "microregiao": "Mogi das Cruzes",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/LlJuDdhFaDQKvit7coXzwK",
    "status": "Ativo"
  },
  {
    "microregiao": "Santos",
    "estado": "SP",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JqGWH5nsVn0KSnA4OrBDEi",
    "status": "Ativo"
  },
  {
    "microregiao": "Paranavaí",
    "estado": "PR",
    "link": "https://chat.whatsapp.com/H4daXGPOyA81Wqv5l1cS5c",
    "linkWhats": "https://chat.whatsapp.com/H4daXGPOyA81Wqv5l1cS5c",
    "status": "Ativo"
  },
  {
    "microregiao": "Umuarama",
    "estado": "PR",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/KblHzYV0aUE1c9aBMdfmrc",
    "status": "Ativo"
  },
  {
    "microregiao": "Cianorte",
    "estado": "PR",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/KHhsLsE1O5O2nnmO0fdOky",
    "status": "Ativo"
  },
  {
    "microregiao": "Goioerê",
    "estado": "PR",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/E0ODHCXS8EJCwlHN95DYf6",
    "status": "Ativo"
  },
  {
    "microregiao": "Campo Mourão",
    "estado": "PR",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/GLrgmUG8Xru4y47jQQMFMI",
    "status": "Ativo"
  },
  {
    "microregiao": "Astorga",
    "estado": "PR",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/JLVTRhVTR9IFgPKvufDvhn",
    "status": "Ativo"
  },
  {
    "microregiao": "Porecatu",
    "estado": "PR",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/Lw0tuCxnU1fHRySiWW7v87",
    "status": "Ativo"
  },
  {
    "microregiao": "Floraí",
    "estado": "PR",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/BfMdzyjnTQE1GyP3QcfvdR",
    "status": "Ativo"
  },
  {
    "microregiao": "Maringá",
    "estado": "PR",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/Dw0tRRpnRoyIq2pHZysA4l",
    "status": "Ativo"
  },
  {
    "microregiao": "Apucarana",
    "estado": "PR",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/E6T5prIlp5iL6lsHeKOOom",
    "status": "Ativo"
  },
  {
    "microregiao": "Londrina",
    "estado": "PR",
    "link": "#", 
    "linkWhats": "https://chat.whatsapp.com/EcNefuNjydsCTobmktUbMW",
    "status": "Ativo"
  },
  {
    "microregiao": "Faxinal",
    "estado": "PR",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/Cadx8KqXTAHGew10ArneKO",
    "status": "Ativo"
  },
  {
    "microregiao": "Ivaiporã",
    "estado": "PR",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/J8tkKwtMb1ZIHLh3eoK3YG",
    "status": "Ativo"
  },
  {
    "microregiao": "Assaí",
    "estado": "PR",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/DVQjBmDPkI35grnnhyPLZd",
    "status": "Ativo"
  },
  {
    "microregiao": "Cornélio Procópio",
    "estado": "PR",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/GxHbc5SJXUF2tBSXK3QhZ5",
    "status": "Ativo"
  },
  {
    "microregiao": "Jacarezinho",
    "estado": "PR",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/HFtd2dm3JlgGPGXPjeMU1a",
    "status": "Ativo"
  },
  {
    "microregiao": "Ibaiti",
    "estado": "PR",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/D49MTthwtRO3vGQ1o0ZhOR",
    "status": "Ativo"
  },
  {
    "microregiao": "Wenceslau Braz",
    "estado": "PR",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/EhTM4ALonQpJfcTB7GgX7j",
    "status": "Ativo"
  },
  {
    "microregiao": "Telêmaco Borba",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Jaguariaíva",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Ponta Grossa",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Toledo",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Cascavel",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Foz do Iguaçu",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Capanema",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Francisco Beltrão",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Pato Branco",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Pitanga",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Guarapuava",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Palmas",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Prudentópolis",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Irati",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "União da Vitória",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "São Mateus do Sul",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Cerro Azul",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Lapa",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Curitiba",
    "estado": "PR",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/ERNsPxFiIdDD5A5TEBFIQm",
    "status": "Ativo"
  },
  {
    "microregiao": "Paranaguá",
    "estado": "PR",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JVRuxaqywo6CCxNIs2y2vD",
    "status": "Ativo"
  },
  {
    "microregiao": "Rio Negro",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "São Miguel do Oeste",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/CcuYOgdpc1u7VhvoH77bOh",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapecó",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/HQdnpsnvBsi4fSxuWEQUMA",
    "status": "Ativo"
  },
  {
    "microregiao": "Xanxerê",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/FUloO2a3aD79B63ovRcAIf",
    "status": "Ativo"
  },
  {
    "microregiao": "Joaçaba",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/HHGKAMovNRNGjWpkiXAjFE",
    "status": "Ativo"
  },
  {
    "microregiao": "Concórdia",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/INIaLrgIh023khEX20DMG8",
    "status": "Ativo"
  },
  {
    "microregiao": "Canoinhas",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/LGxJIi8OHVRLO7hGoEHi2L",
    "status": "Ativo"
  },
  {
    "microregiao": "São Bento do Sul",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/L4Y1GRBu0aq6bU8jxK2J6W",
    "status": "Ativo"
  },
  {
    "microregiao": "Joinville",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/LTdP0W0AMWT0fqCzvqsV7R",
    "status": "Ativo"
  },
  {
    "microregiao": "Curitibanos",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/HNKQUG7h0DP5IqpqJAw5i1",
    "status": "Ativo"
  },
  {
    "microregiao": "Campos de Lages",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/LYGq7kidwqyHyrn2zIs68J",
    "status": "Ativo"
  },
  {
    "microregiao": "Rio do Sul",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/L0QEUMPKocHDhn5bw0W0JE",
    "status": "Ativo"
  },
  {
    "microregiao": "Blumenau",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/C4Aq7sZX3J4KfugVHlduNY",
    "status": "Ativo"
  },
  {
    "microregiao": "Itajaí",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JT4DHQA9BMZ8PvlO6U23Lz",
    "status": "Ativo"
  },
  {
    "microregiao": "Ituporanga",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/JipdBCuirMg2OzJcVnPR64",
    "status": "Ativo"
  },
  {
    "microregiao": "Tijucas",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/G9PWhwZ4LAY7Q6d8RtE39l",
    "status": "Ativo"
  },
  {
    "microregiao": "Florianópolis",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/DtE9qsy6KQO6ImTCEqlTFh",
    "status": "Ativo"
  },
  {
    "microregiao": "Tabuleiro",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/FWtc7aEdqqU8lFXnJ7a4p1",
    "status": "Ativo"
  },
  {
    "microregiao": "Tubarão",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/LtEthiUdRic1sAQNNc0M5K",
    "status": "Ativo"
  },
  {
    "microregiao": "Criciúma",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/KoSOMw3Aat72gKDyEmGF1j",
    "status": "Ativo"
  },
  {
    "microregiao": "Araranguá",
    "estado": "SC",
    "link": "#",
    "linkWhats": "https://chat.whatsapp.com/B9ete57LamS5ichyjf67v3",
    "status": "Ativo"
  },
  {
    "microregiao": "Santa Rosa",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Três Passos",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Frederico Westphalen",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Erechim",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Sananduva",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Cerro Largo",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Santo Ângelo",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Ijuí",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Carazinho",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Passo Fundo",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Cruz Alta",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Não-Me-Toque",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Soledade",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Guaporé",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Vacaria",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Caxias do Sul",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Santiago",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Santa Maria",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Restinga Seca",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Santa Cruz do Sul",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Lajeado-Estrela",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Cachoeira do Sul",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Montenegro",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Gramado-Canela",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "São Jerônimo",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Porto Alegre",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Osório",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Camaquã",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Campanha Ocidental",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Campanha Central",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Campanha Meridional",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Serras de Sudeste",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Pelotas",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Jaguarão",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Litoral Lagunar",
    "estado": "RS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Baixo Pantanal",
    "estado": "MS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Aquidauana",
    "estado": "MS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Alto Taquari",
    "estado": "MS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Campo Grande",
    "estado": "MS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Cassilândia",
    "estado": "MS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Paranaíba",
    "estado": "MS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Três Lagoas",
    "estado": "MS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Nova Andradina",
    "estado": "MS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Bodoquena",
    "estado": "MS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Dourados",
    "estado": "MS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Iguatemi",
    "estado": "MS",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Aripuanã",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Alta Floresta",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Colíder",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Parecis",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Arinos",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Alto Teles Pires",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Sinop",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Paranatinga",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Norte Araguaia",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Canarana",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Médio Araguaia",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Alto Guaporé",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Tangará da Serra",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Jauru",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Alto Paraguai",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Rosário Oeste",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Cuiabá",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Alto Pantanal",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Primavera do Leste",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Tesouro",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Rondonópolis",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Alto Araguaia",
    "estado": "MT",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "São Miguel do Araguaia",
    "estado": "GO",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Rio Vermelho",
    "estado": "GO",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Aragarças",
    "estado": "GO",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Porangatu",
    "estado": "GO",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Chapada dos Veadeiros",
    "estado": "GO",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Ceres",
    "estado": "GO",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Anápolis",
    "estado": "GO",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Iporá",
    "estado": "GO",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Anicuns",
    "estado": "GO",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Goiânia",
    "estado": "GO",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Vão do Paranã",
    "estado": "GO",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Entorno de Brasília",
    "estado": "GO",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Sudoeste de Goiás",
    "estado": "GO",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Vale do Rio dos Bois",
    "estado": "GO",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Meia Ponte",
    "estado": "GO",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Pires do Rio",
    "estado": "GO",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Catalão",
    "estado": "GO",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Quirinópolis",
    "estado": "GO",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Brasília",
    "estado": "DF",
    "link": "em-breve.html",
    "status": "Em Breve"
  }
];

// Mapeamento de estados (sigla para nome completo)
const estadosMap = {
    "AC": "Acre",
    "AL": "Alagoas",
    "AP": "Amapá",
    "AM": "Amazonas",
    "BA": "Bahia",
    "CE": "Ceará",
    "DF": "Distrito Federal",
    "ES": "Espírito Santo",
    "GO": "Goiás",
    "MA": "Maranhão",
    "MT": "Mato Grosso",
    "MS": "Mato Grosso do Sul",
    "MG": "Minas Gerais",
    "PA": "Pará",
    "PB": "Paraíba",
    "PR": "Paraná",
    "PE": "Pernambuco",
    "PI": "Piauí",
    "RJ": "Rio de Janeiro",
    "RN": "Rio Grande do Norte",
    "RS": "Rio Grande do Sul",
    "RO": "Rondônia",
    "RR": "Roraima",
    "SC": "Santa Catarina",
    "SP": "São Paulo",
    "SE": "Sergipe",
    "TO": "Tocantins"
};
