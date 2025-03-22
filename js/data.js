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
  },
  {
    "microregiao": "Pau dos Ferros",
    "estado": "RN",
    "link": "https://t.me/+9uEFPEreAy9lYzgx",
    "status": "Ativo"
  },
  {
    "microregiao": "Serra de São Miguel",
    "estado": "RN",
    "link": "https://t.me/+FMF9q3ETeQs0MTkx",
    "status": "Ativo"
  },
  {
    "microregiao": "Vale do Açu",
    "estado": "RN",
    "link": "https://t.me/+VZXDMIOYeBgzZmZh",
    "status": "Ativo"
  },
  {
    "microregiao": "Médio Oeste",
    "estado": "RN",
    "link": "https://t.me/+g8FfRPJnVC42NWUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapada do Apodi",
    "estado": "RN",
    "link": "https://t.me/+-SNdwMsx5lgwNGRh",
    "status": "Ativo"
  },
  {
    "microregiao": "Mossoró",
    "estado": "RN",
    "link": "https://t.me/+uYri4NPsNiQwMTAx",
    "status": "Ativo"
  },
  {
    "microregiao": "Brejo Santo",
    "estado": "CE",
    "link": "https://t.me/+3Pkti7RIq41mNDNh",
    "status": "Ativo"
  },
  {
    "microregiao": "Cariri",
    "estado": "CE",
    "link": "https://t.me/+7fVSgI3AM-00MWUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Barro",
    "estado": "CE",
    "link": "https://t.me/+hJOY_6hL5xVmNmNh",
    "status": "Ativo"
  },
  {
    "microregiao": "Caririaçu",
    "estado": "CE",
    "link": "https://t.me/+hoaYVn7LLKo1NDUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapada do Araripe",
    "estado": "CE",
    "link": "https://t.me/+fsR_2LBHGto4MmI5",
    "status": "Ativo"
  },
  {
    "microregiao": "Lavras da Mangabeira",
    "estado": "CE",
    "link": "https://t.me/+zDtBXDiJRqw5NmIx",
    "status": "Ativo"
  },
  {
    "microregiao": "Várzea Alegre",
    "estado": "CE",
    "link": "https://t.me/+De5VD0_gvzwyMWYx",
    "status": "Ativo"
  },
  {
    "microregiao": "Iguatu",
    "estado": "CE",
    "link": "https://t.me/+d-bGygzVQaQ1OTIx",
    "status": "Ativo"
  },
  {
    "microregiao": "Serra do Pereiro",
    "estado": "CE",
    "link": "https://t.me/+Gs-HkDOVvKJjM2Jh",
    "status": "Ativo"
  },
  {
    "microregiao": "Médio Jaguaribe",
    "estado": "CE",
    "link": "https://t.me/+xh3laWr-cIllMGI5",
    "status": "Ativo"
  },
  {
    "microregiao": "Baixo Jaguaribe",
    "estado": "CE",
    "link": "https://t.me/+VJXM8YGC3QpkNzQ5",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral de Aracati",
    "estado": "CE",
    "link": "https://t.me/+M69xu9txaoxkMDNh",
    "status": "Ativo"
  },
  {
    "microregiao": "Sertão de Senador Pompeu",
    "estado": "CE",
    "link": "https://t.me/+XuwEWFwbpKI0YTI5",
    "status": "Ativo"
  },
  {
    "microregiao": "Sertão de Inhamuns",
    "estado": "CE",
    "link": "https://t.me/+r0uzFrl7NsszN2Rh",
    "status": "Ativo"
  },
  {
    "microregiao": "Sertão de Quixeramobim",
    "estado": "CE",
    "link": "https://t.me/+ts1dMF8NMogzMWMx",
    "status": "Ativo"
  },
  {
    "microregiao": "Sertão de Cratéus",
    "estado": "CE",
    "link": "https://t.me/+zL6Fh-GS86M2ZDEx",
    "status": "Ativo"
  },
  {
    "microregiao": "Pacajus",
    "estado": "CE",
    "link": "https://t.me/+v8xrK2KrgrAzNjUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Fortaleza",
    "estado": "CE",
    "link": "https://t.me/+kpAXAgQzb_1kNTVh",
    "status": "Ativo"
  },
  {
    "microregiao": "Cascavel",
    "estado": "CE",
    "link": "https://t.me/+gUDVfNd8-dI4M2M5",
    "status": "Ativo"
  },
  {
    "microregiao": "Chorozinho",
    "estado": "CE",
    "link": "https://t.me/+o8uL93qAqpQ2M2Ex",
    "status": "Ativo"
  },
  {
    "microregiao": "Baturité",
    "estado": "CE",
    "link": "https://t.me/+0nZDUj3EL7MwNTlh",
    "status": "Ativo"
  },
  {
    "microregiao": "Canindé",
    "estado": "CE",
    "link": "https://t.me/+Lem2QNqXNxpiYjM5",
    "status": "Ativo"
  },
  {
    "microregiao": "Médio Curu",
    "estado": "CE",
    "link": "https://t.me/+1xyldRl1yxgxNTBh",
    "status": "Ativo"
  },
  {
    "microregiao": "Uruburetama",
    "estado": "CE",
    "link": "https://t.me/+Yii6d72FLKw1ZjAx",
    "status": "Ativo"
  },
  {
    "microregiao": "Baixo Curu",
    "estado": "CE",
    "link": "https://t.me/+VZ9T_fE8f1k1NDRh",
    "status": "Ativo"
  },
  {
    "microregiao": "Itapipoca",
    "estado": "CE",
    "link": "https://t.me/+fQ3SLRzZKtQ5NGIx",
    "status": "Ativo"
  },
  {
    "microregiao": "Santa Quitéria",
    "estado": "CE",
    "link": "https://t.me/+fepb1TXtNGRhZWUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Ipu",
    "estado": "CE",
    "link": "https://t.me/+fOsi5kVKy-o5NDJh",
    "status": "Ativo"
  },
  {
    "microregiao": "Sobral",
    "estado": "CE",
    "link": "https://t.me/+_cE05SQP7601YmFh",
    "status": "Ativo"
  },
  {
    "microregiao": "Meruoca",
    "estado": "CE",
    "link": "https://t.me/+pu1tzb-Vxgs5YTgx",
    "status": "Ativo"
  },
  {
    "microregiao": "Coreaú",
    "estado": "CE",
    "link": "https://t.me/+xn5S09JstGBmZWRh",
    "status": "Ativo"
  },
  {
    "microregiao": "Ibiapaba",
    "estado": "CE",
    "link": "https://t.me/+mJXiq4gQGz5iYmQx",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral de Camocim e Acaraú",
    "estado": "CE",
    "link": "https://t.me/+_1ws4Wj6Q8JhZDJh",
    "status": "Ativo"
  },
  {
    "microregiao": "Alto Médio Canindé",
    "estado": "PI",
    "link": "https://t.me/+7Tu5vHUPnPM0Mzlh",
    "status": "Ativo"
  },
  {
    "microregiao": "Pio IX",
    "estado": "PI",
    "link": "https://t.me/+B1fjxrjhpsZlOTFh",
    "status": "Ativo"
  },
  {
    "microregiao": "Picos",
    "estado": "PI",
    "link": "https://t.me/+8G7YBGcxDPo5NjVh",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapadas do Extremo Sul Piauiense",
    "estado": "PI",
    "link": "https://t.me/+C0VGid1x7N5kYjgx",
    "status": "Ativo"
  },
  {
    "microregiao": "São Raimundo Nonato",
    "estado": "PI",
    "link": "https://t.me/+vn97dqw7Xo8wNDkx",
    "status": "Ativo"
  },
  {
    "microregiao": "Alto Médio Gurguéia",
    "estado": "PI",
    "link": "https://t.me/+utouJaFA4u03OTA5",
    "status": "Ativo"
  },
  {
    "microregiao": "Floriano",
    "estado": "PI",
    "link": "https://t.me/+3RGXofsweHMxMmQx",
    "status": "Ativo"
  },
  {
    "microregiao": "Bertolínia",
    "estado": "PI",
    "link": "https://t.me/+za_TAXMHj9g1NmEx",
    "status": "Ativo"
  },
  {
    "microregiao": "Alto Parnaíba Piauiense",
    "estado": "PI",
    "link": "https://t.me/+xWT4k8-_c4hkMzQx",
    "status": "Ativo"
  },
  {
    "microregiao": "Valença do Piauí",
    "estado": "PI",
    "link": "https://t.me/+W1ACRcUjdFBiYmIx",
    "status": "Ativo"
  },
  {
    "microregiao": "Médio Parnaíba Piauiense",
    "estado": "PI",
    "link": "https://t.me/+vcp-3NJwSoVhMmJh",
    "status": "Ativo"
  },
  {
    "microregiao": "Vitória de Santo Antão",
    "estado": "PE",
    "link": "https://t.me/+Fk-gQx6zDL03MmMx",
    "status": "Ativo"
  },
  {
    "microregiao": "Mata Setentrional Pernambucana",
    "estado": "PE",
    "link": "https://t.me/+2_45VRfYXoRmYTU5",
    "status": "Ativo"
  },
  {
    "microregiao": "Brejo Pernambucano",
    "estado": "PE",
    "link": "https://t.me/+8Thkkv__FNo2Y2Ux",
    "status": "Ativo"
  },
  {
    "microregiao": "Garanhuns",
    "estado": "PE",
    "link": "https://t.me/+86qk4LaFujxmODkx",
    "status": "Ativo"
  },
  {
    "microregiao": "Médio Capibaribe",
    "estado": "PE",
    "link": "https://t.me/+qC4zcooiWoZhYmFh",
    "status": "Ativo"
  },
  {
    "microregiao": "Alto Capibaribe",
    "estado": "PE",
    "link": "https://t.me/+aSrM8tYWSFE5OWI5",
    "status": "Ativo"
  },
  {
    "microregiao": "Vale do Ipojuca",
    "estado": "PE",
    "link": "https://t.me/+xprCYiW_OQA3ZWVh",
    "status": "Ativo"
  },
  {
    "microregiao": "Vale do Ipanema",
    "estado": "PE",
    "link": "https://t.me/+QFVjtUKL8DAzOWVh",
    "status": "Ativo"
  },
  {
    "microregiao": "Itaparica",
    "estado": "PE",
    "link": "https://t.me/+nqFug_MIqPdmOGJh",
    "status": "Ativo"
  },
  {
    "microregiao": "Petrolina",
    "estado": "PE",
    "link": "https://t.me/+tfCY8_Z_9pMxZjgx",
    "status": "Ativo"
  },
  {
    "microregiao": "Sertão do Moxotó",
    "estado": "PE",
    "link": "https://t.me/+WBNl3DA0TKM2NDhh",
    "status": "Ativo"
  },
  {
    "microregiao": "Pajeú",
    "estado": "PE",
    "link": "https://t.me/+ZK17_d3LcM9kYjMx",
    "status": "Ativo"
  },
  {
    "microregiao": "Salgueiro",
    "estado": "PE",
    "link": "https://t.me/+IHb63WRvxwZlMTFh",
    "status": "Ativo"
  },
  {
    "microregiao": "Araripina",
    "estado": "PE",
    "link": "https://t.me/+UUR0xo86CChhODJh",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral Sul",
    "estado": "PB",
    "link": "https://t.me/+HXEPnTIYiac0ODU5",
    "status": "Ativo"
  },
  {
    "microregiao": "João Pessoa",
    "estado": "PB",
    "link": "https://t.me/+YzXjCFrR3scyN2Q5",
    "status": "Ativo"
  },
  {
    "microregiao": "Sapé",
    "estado": "PB",
    "link": "https://t.me/+sJUgmIoh9xQyMjAx",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral Norte",
    "estado": "PB",
    "link": "https://t.me/+nDPCXfLEbt1lNTFh",
    "status": "Ativo"
  },
  {
    "microregiao": "Umbuzeiro",
    "estado": "PB",
    "link": "https://t.me/+OIxi-IuYvwhhZjcx",
    "status": "Ativo"
  },
  {
    "microregiao": "Itabaiana",
    "estado": "PB",
    "link": "https://t.me/+UROUN6_1ZUc4MGEx",
    "status": "Ativo"
  },
  {
    "microregiao": "Campina Grande",
    "estado": "PB",
    "link": "https://t.me/+hZi9CUPHFNRlODQx",
    "status": "Ativo"
  },
  {
    "microregiao": "Guarabira",
    "estado": "PB",
    "link": "https://t.me/+pH4wCGkGwN8zMTcx",
    "status": "Ativo"
  },
  {
    "microregiao": "Brejo Paraibano",
    "estado": "PB",
    "link": "https://t.me/+djQGMG-1ZjBjNTMx",
    "status": "Ativo"
  },
  {
    "microregiao": "Esperança",
    "estado": "PB",
    "link": "https://t.me/+gCkFLS93kRpiODMx",
    "status": "Ativo"
  },
  {
    "microregiao": "Curimataú Oriental",
    "estado": "PB",
    "link": "https://t.me/+vZATUTy36pgzY2Fh",
    "status": "Ativo"
  },
  {
    "microregiao": "Curimataú Ocidental",
    "estado": "PB",
    "link": "https://t.me/+mblG8eDID8Y3OTZh",
    "status": "Ativo"
  },
  {
    "microregiao": "Cariri Oriental",
    "estado": "PB",
    "link": "https://t.me/+hUKkD15LcqNkYTdh",
    "status": "Ativo"
  },
  {
    "microregiao": "Cariri Ocidental",
    "estado": "PB",
    "link": "https://t.me/+rn46nMqrxHU5MDg5",
    "status": "Ativo"
  },
  {
    "microregiao": "Seridó Oriental Paraibano",
    "estado": "PB",
    "link": "https://t.me/+BFy6U5Aabs5iZmQx",
    "status": "Ativo"
  },
  {
    "microregiao": "Seridó Ocidental Paraibano",
    "estado": "PB",
    "link": "https://t.me/+l15wlqFOwBw5YWZh",
    "status": "Ativo"
  },
  {
    "microregiao": "Serra do Teixeira",
    "estado": "PB",
    "link": "https://t.me/+pZnnEMtZrsc4MzYx",
    "status": "Ativo"
  },
  {
    "microregiao": "Itaporanga",
    "estado": "PB",
    "link": "https://t.me/+HySX3MSA174xMmU5",
    "status": "Ativo"
  },
  {
    "microregiao": "Piancó",
    "estado": "PB",
    "link": "https://t.me/+5enxboHMTuoxY2Mx",
    "status": "Ativo"
  },
  {
    "microregiao": "Patos",
    "estado": "PB",
    "link": "https://t.me/+nNZXgN4VzrkyYmEx",
    "status": "Ativo"
  },
  {
    "microregiao": "Sousa",
    "estado": "PB",
    "link": "https://t.me/+dclLrzjsCu42NjUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Cajazeiras",
    "estado": "PB",
    "link": "https://t.me/+217XOffsjxU5YjEx",
    "status": "Ativo"
  },
  {
    "microregiao": "Catolé do Rocha",
    "estado": "PB",
    "link": "https://t.me/+srFayXJYnfI3MDkx",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral Sul",
    "estado": "RN",
    "link": "https://t.me/+G89IJOMkZJxjNGMx",
    "status": "Ativo"
  },
  {
    "microregiao": "Natal",
    "estado": "RN",
    "link": "https://t.me/+ttO7VBY3pzYxYjVh",
    "status": "Ativo"
  },
  {
    "microregiao": "Macaíba",
    "estado": "RN",
    "link": "https://t.me/+HLXKXI34KgYwMDUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral Nordeste",
    "estado": "RN",
    "link": "https://t.me/+P9B6YSqrrstmN2Qx",
    "status": "Ativo"
  },
  {
    "microregiao": "Agreste Potiguar",
    "estado": "RN",
    "link": "https://t.me/+L6NcmVkp7L5hYTRh",
    "status": "Ativo"
  },
  {
    "microregiao": "Borborema Potiguar",
    "estado": "RN",
    "link": "https://t.me/+d-lE5nSFhZAxMjIx",
    "status": "Ativo"
  },
  {
    "microregiao": "Baixa Verde",
    "estado": "RN",
    "link": "https://t.me/+k9JZKb8cmSo0MzY5",
    "status": "Ativo"
  },
  {
    "microregiao": "Seridó Oriental",
    "estado": "RN",
    "link": "https://t.me/+vX9vi-0Uur5kMDdh",
    "status": "Ativo"
  },
  {
    "microregiao": "Seridó Ocidental",
    "estado": "RN",
    "link": "https://t.me/+2C5cF9G6LiM4MDEx",
    "status": "Ativo"
  },
  {
    "microregiao": "Serra de Santana",
    "estado": "RN",
    "link": "https://t.me/+mK5RRk4-g59iZWMx",
    "status": "Ativo"
  },
  {
    "microregiao": "Angicos",
    "estado": "RN",
    "link": "https://t.me/+igpdr1oXUNA5YjAx",
    "status": "Ativo"
  },
  {
    "microregiao": "Macau",
    "estado": "RN",
    "link": "https://t.me/+ggHHMBEbgWo0YzYx",
    "status": "Ativo"
  },
  {
    "microregiao": "Umarizal",
    "estado": "RN",
    "link": "https://t.me/+q9BG32rhf_M4Mjcx",
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
