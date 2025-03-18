// Dados dos grupos de plantões médicos
const gruposData = [
  {
    "estado": "PA",
    "microregiao": "Marabá",
    "link": "https://t.me/+XPMHlx8sMO1jM2Q5",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Parauapebas",
    "link": "https://t.me/+lpmoU8pzGZlhZGU5",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "São Félix do Xingu",
    "link": "https://t.me/+CkJB9lTTsHBmZWFh",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Paragominas",
    "link": "https://t.me/+BlczR6T6um40MTU5",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Tucuruí",
    "link": "https://t.me/+oYGvN2xS9KJmZTkx",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Altamira",
    "link": "https://t.me/+szJwE7ao1m80ZTYx",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Itaituba",
    "link": "https://t.me/+H4zfvfL6d8U4ZGIx",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Guamá",
    "link": "https://t.me/+b4STrHJLPvdlNWQx",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Tomé-Açu",
    "link": "https://t.me/+DR9fshbIezMwM2Mx",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Cametá",
    "link": "https://t.me/+a5ndsmZ4YTg4ZGQx",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Bragantina",
    "link": "https://t.me/+dW1EOuymMGsyODVh",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Salgado",
    "link": "https://t.me/+0k6QOhkbwqc5ZDcx",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Castanhal",
    "link": "https://t.me/+9cVC986WQZowODk5",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Belém",
    "link": "https://t.me/+7JKSBk9d1OwxODUx",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Arari",
    "link": "https://t.me/+4YdEjD6wB5k2OGMx",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Furos de Breves",
    "link": "https://t.me/+j6cOVp9bgVo5MTAx",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Portel",
    "link": "https://t.me/+voJR_cqSfsFmNDFh",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Almeirim",
    "link": "https://t.me/+PukHToWCXcY5Y2Zh",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Santarém",
    "link": "https://t.me/+ZZw42vnUWgMxZmM5",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Óbidos",
    "link": "https://t.me/+k68EP1uv7Bg1N2Mx",
    "status": "Ativo"
  },
  {
    "estado": "RR",
    "microregiao": "Sudeste de Roraima",
    "link": "https://t.me/+Mb0v9YI4paNhYzgx",
    "status": "Ativo"
  },
  {
    "estado": "RR",
    "microregiao": "Caracaraí",
    "link": "https://t.me/+1RtKgk7unIYwNjEx",
    "status": "Ativo"
  },
  {
    "estado": "RR",
    "microregiao": "Nordeste de Roraima",
    "link": "https://t.me/+amY8gnkc578wMDM5",
    "status": "Ativo"
  },
  {
    "estado": "RR",
    "microregiao": "Boa Vista",
    "link": "https://t.me/+LKsv3Yp6f4JkN2Yx",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Madeira",
    "link": "https://t.me/+EQyXuYKoaoM0OTEx",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Purus",
    "link": "https://t.me/+zNNGt5pGsQI5Mzgx",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Boca do Acre",
    "link": "https://t.me/+4Bc51YZ506QyZDAx",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Parintins",
    "link": "https://t.me/+x-Gl59ynRjw1ZTUx",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Itacoatiara",
    "link": "https://t.me/+1Twu7Z3n5GRlYmVh",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Rio Preto da Eva",
    "link": "https://t.me/+eCaqOCpql9JiMzUx",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Manaus",
    "link": "https://t.me/+agbIrZzQTjQzMmMx",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Coari",
    "link": "https://t.me/+3QGdzgIst4w0MmVh",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Tefé",
    "link": "https://t.me/+4h0zZYm7yhQ0Yjkx",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Juruá",
    "link": "https://t.me/+XTW7_eHkyThlY2Yx",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Alto Solimões",
    "link": "https://t.me/+DN4VnCzQZv41MDNh",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Japurá",
    "link": "https://t.me/+tWqzTfKi4K1jNjdh",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Rio Negro",
    "link": "https://t.me/+qWfb6WIrTGkyZWQx",
    "status": "Ativo"
  },
  {
    "estado": "AC",
    "microregiao": "Brasiléia",
    "link": "https://t.me/+7MAadk0IH_A2OWYx",
    "status": "Ativo"
  },
  {
    "estado": "AC",
    "microregiao": "Rio Branco",
    "link": "https://t.me/+l3E5fZNxQ05mYTA5",
    "status": "Ativo"
  },
  {
    "estado": "AC",
    "microregiao": "Sena Madureira",
    "link": "https://t.me/+iASgFsXzS3VhMjEx",
    "status": "Ativo"
  },
  {
    "estado": "AC",
    "microregiao": "Tarauacá",
    "link": "https://t.me/+8360ePkSZjhjZTA5",
    "status": "Ativo"
  },
  {
    "estado": "AC",
    "microregiao": "Cruzeiro do Sul",
    "link": "https://t.me/+Rj8LVg3YT5YxMzUx",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Colorado do Oeste",
    "link": "https://t.me/+s4TL4QrHglw4NWZh",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Vilhena",
    "link": "https://t.me/+SykEfNiXQcUyMjJh",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Cacoal",
    "link": "https://t.me/+SfXlxNkfVIcxMTE5",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Alvorada D'Oeste",
    "link": "https://t.me/+-pJeQZre9lQ3MTBh",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Ji-Paraná",
    "link": "https://t.me/+dV955PR9D5U5MDdh",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Ariquemes",
    "link": "https://t.me/+vBcpQ7lJMfM1MzRh",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Guajará-Mirim",
    "link": "https://t.me/+nft6hd73_wgxMDVh",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Porto Velho",
    "link": "https://t.me/+7ZJLJwVZ6nllYzYx",
    "status": "Ativo"
  },
  {
    "microregiao": "Caxias",
    "estado": "MA",
    "link": "https://t.me/+pUsVmtuBYJ44NzU5",
    "status": "Ativo"
  },
  {
    "microregiao": "Coelho Neto",
    "estado": "MA",
    "link": "https://t.me/+gCgfJzoileZkMjJh",
    "status": "Ativo"
  },
  {
    "microregiao": "Codó",
    "estado": "MA",
    "link": "https://t.me/+YYBFaVkvS1w5M2Yx",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapadinha",
    "estado": "MA",
    "link": "https://t.me/+r5YiL-gKATw0Nzkx",
    "status": "Ativo"
  },
  {
    "microregiao": "Baixo Parnaíba Maranhense",
    "estado": "MA",
    "link": "https://t.me/+zpysFh19KwM2NDEx",
    "status": "Ativo"
  },
  {
    "microregiao": "Presidente Dutra",
    "estado": "MA",
    "link": "https://t.me/+eAbpjk_-QMpjOWZh",
    "status": "Ativo"
  },
  {
    "microregiao": "Alto Mearim e Grajaú",
    "estado": "MA",
    "link": "https://t.me/+V8-rzi3DNyE5NzBh",
    "status": "Ativo"
  },
  {
    "microregiao": "Médio Mearim",
    "estado": "MA",
    "link": "https://t.me/+9cL97XqyY0Y4MmIx",
    "status": "Ativo"
  },
  {
    "microregiao": "Imperatriz",
    "estado": "MA",
    "link": "https://t.me/+vtHH-L2IpvRhODZh",
    "status": "Ativo"
  },
  {
    "microregiao": "Pindaré",
    "estado": "MA",
    "link": "https://t.me/+PZDWqrmRFTY1ZTVh",
    "status": "Ativo"
  },
  {
    "microregiao": "Gurupi",
    "estado": "MA",
    "link": "https://t.me/+Vq1U4VR0SDkzZDYx",
    "status": "Ativo"
  },
  {
    "microregiao": "Itapecuru Mirim",
    "estado": "MA",
    "link": "https://t.me/+dqJEZpbOJKcwN2Ux",
    "status": "Ativo"
  },
  {
    "microregiao": "Baixada Maranhense",
    "estado": "MA",
    "link": "https://t.me/+5m7hoGqY5PRhNzgx",
    "status": "Ativo"
  },
  {
    "microregiao": "Lençóis Maranhenses",
    "estado": "MA",
    "link": "https://t.me/+wXgpBWPX2lI2MWUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Rosário",
    "estado": "MA",
    "link": "https://t.me/+xy8H0U6zoFA1ZWVh",
    "status": "Ativo"
  },
  {
    "microregiao": "Aglomeração Urbana de São Luís",
    "estado": "MA",
    "link": "https://t.me/+9o9iPZgv46syOGUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral Ocidental Maranhense",
    "estado": "MA",
    "link": "https://t.me/+Y1Uni2QyV3xmYzUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Dianópolis",
    "estado": "TO",
    "link": "https://t.me/+RZ97MFafh7EyMzQx",
    "status": "Ativo"
  },
  {
    "microregiao": "Jalapão",
    "estado": "TO",
    "link": "https://t.me/+dbKk2Yp3Vjw5NjRh",
    "status": "Ativo"
  },
  {
    "microregiao": "Porto Nacional",
    "estado": "TO",
    "link": "https://t.me/+ImdKAmPiXeRiZGIx",
    "status": "Ativo"
  },
  {
    "microregiao": "Gurupi",
    "estado": "TO",
    "link": "https://t.me/+VM-79Fm3iV01Mjhh",
    "status": "Ativo"
  },
  {
    "microregiao": "Rio Formoso",
    "estado": "TO",
    "link": "https://t.me/+O3C_f6MamrAwMmEx",
    "status": "Ativo"
  },
  {
    "microregiao": "Miracema do Tocantins",
    "estado": "TO",
    "link": "https://t.me/+dZqyq7opl_0zMTkx",
    "status": "Ativo"
  },
  {
    "microregiao": "Araguaína",
    "estado": "TO",
    "link": "https://t.me/+4AnIW9cE0sBiNTRh",
    "status": "Ativo"
  },
  {
    "microregiao": "Bico do Papagaio",
    "estado": "TO",
    "link": "https://t.me/+viJKs-Vqt_RiY2Zh",
    "status": "Ativo"
  },
  {
    "microregiao": "Mazagão",
    "estado": "AP",
    "link": "https://t.me/+1K3ZkvNUqxw0MmUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Macapá",
    "estado": "AP",
    "link": "https://t.me/+gC6OK57SM-4wYWFh",
    "status": "Ativo"
  },
  {
    "microregiao": "Amapá",
    "estado": "AP",
    "link": "https://t.me/+EFxhj3rhdUBiYzhh",
    "status": "Ativo"
  },
  {
    "microregiao": "Oiapoque",
    "estado": "AP",
    "link": "https://t.me/+zCI62cgHve9mYzUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Conceição do Araguaia",
    "estado": "PA",
    "link": "https://t.me/+X3GXNAoSvJhhYzEx",
    "status": "Ativo"
  },
  {
    "microregiao": "Redenção",
    "estado": "PA",
    "link": "https://t.me/+KNr7wTkewCJjZWIx",
    "status": "Ativo"
  },
  {
    "microregiao": "Campo Maior",
    "estado": "PI",
    "link": "https://t.me/+vs6O5hVO9lIzNTkx",
    "status": "Ativo"
  },
  {
    "microregiao": "Teresina",
    "estado": "PI",
    "link": "https://t.me/+UkgIXloyB9w2ZDVh",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral Piauiense",
    "estado": "PI",
    "link": "https://t.me/+bw5L5x7S0pRkM2Ux",
    "status": "Ativo"
  },
  {
    "microregiao": "Baixo Parnaíba Piauiense",
    "estado": "PI",
    "link": "https://t.me/+BBuUsYcyt9E0NmUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapadas das Mangabeiras",
    "estado": "MA",
    "link": "https://t.me/+ZNB09tnLkwM5MDMx",
    "status": "Ativo"
  },
  {
    "microregiao": "Gerais de Balsas",
    "estado": "MA",
    "link": "https://t.me/+cKhofUjhGLo0OTkx",
    "status": "Ativo"
  },
  {
    "microregiao": "Porto Franco",
    "estado": "MA",
    "link": "https://t.me/+3LXHaY4Dg-Q1YTdh",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapadas do Alto Itapecuru",
    "estado": "MA",
    "link": "https://t.me/+xl7PFX7B_1g4NGMx",
    "status": "Ativo"
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
