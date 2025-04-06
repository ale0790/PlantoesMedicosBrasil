// Dados dos grupos de plantões médicos
const gruposData = [
  {
    "estado": "RO",
    "microregiao": "Porto Velho",
    "link": "https://t.me/+7ZJLJwVZ6nllYzYx",
    "linkWhats": "https://chat.whatsapp.com/JQtQjQruaTSHRNKu9Wm4rs",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Guajará-Mirim",
    "link": "https://t.me/+nft6hd73_wgxMDVh",
    "linkWhats": "https://chat.whatsapp.com/GtdcZdDpGRE0nsDzmewgIU",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Ariquemes",
    "link": "https://t.me/+vBcpQ7lJMfM1MzRh",
    "linkWhats": "https://chat.whatsapp.com/IHkBswQqBrr26J5wWK4tKx",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Ji-Paraná",
    "link": "https://t.me/+dV955PR9D5U5MDdh",
    "linkWhats": "https://chat.whatsapp.com/DYgCLgCMi7T79JlmPg7BNW",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Alvorada D'Oeste",
    "link": "https://t.me/+J7G2aN_O-NEzYmRh",
    "linkWhats": "https://chat.whatsapp.com/L2Xi1OLJ6plGOyiZEdKwpl",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Cacoal",
    "link": "https://t.me/+SfXlxNkfVIcxMTE5",
    "linkWhats": "https://chat.whatsapp.com/BhHvqzf2oug7jF3z6Yn7OU",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Vilhena",
    "link": "https://t.me/+SykEfNiXQcUyMjJh",
    "linkWhats": "https://chat.whatsapp.com/HlPwFHKmyRDHO8QMUGOcWy",
    "status": "Ativo"
  },
  {
    "estado": "RO",
    "microregiao": "Colorado do Oeste",
    "link": "https://t.me/+s4TL4QrHglw4NWZh",
    "linkWhats": "https://chat.whatsapp.com/FyVr7OaRac0JHv59cv4NF1",
    "status": "Ativo"
  },
  {
    "estado": "AC",
    "microregiao": "Cruzeiro do Sul",
    "link": "https://t.me/+Rj8LVg3YT5YxMzUx",
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
    "microregiao": "Sena Madureira",
    "link": "https://t.me/+iASgFsXzS3VhMjEx",
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
    "microregiao": "Brasiléia",
    "link": "https://t.me/+7MAadk0IH_A2OWYx",
    "status": "Ativo"
  },
  {
    "estado": "AM",
    "microregiao": "Rio Negro",
    "link": "https://t.me/+qWfb6WIrTGkyZWQx",
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
    "microregiao": "Alto Solimões",
    "link": "https://t.me/+DN4VnCzQZv41MDNh",
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
    "microregiao": "Tefé",
    "link": "https://t.me/+4h0zZYm7yhQ0Yjkx",
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
    "microregiao": "Manaus",
    "link": "https://t.me/+agbIrZzQTjQzMmMx",
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
    "microregiao": "Itacoatiara",
    "link": "https://t.me/+1Twu7Z3n5GRlYmVh",
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
    "microregiao": "Boca do Acre",
    "link": "https://t.me/+4Bc51YZ506QyZDAx",
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
    "microregiao": "Madeira",
    "link": "https://t.me/+EQyXuYKoaoM0OTEx",
    "status": "Ativo"
  },
  {
    "estado": "RR",
    "microregiao": "Boa Vista",
    "link": "https://t.me/+LKsv3Yp6f4JkN2Yx",
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
    "microregiao": "Caracaraí",
    "link": "https://t.me/+1RtKgk7unIYwNjEx",
    "status": "Ativo"
  },
  {
    "estado": "RR",
    "microregiao": "Sudeste de Roraima",
    "link": "https://t.me/+Mb0v9YI4paNhYzgx",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Óbidos",
    "link": "https://t.me/+k68EP1uv7Bg1N2Mx",
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
    "microregiao": "Almeirim",
    "link": "https://t.me/+PukHToWCXcY5Y2Zh",
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
    "microregiao": "Furos de Breves",
    "link": "https://t.me/+j6cOVp9bgVo5MTAx",
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
    "microregiao": "Belém",
    "link": "https://t.me/+7JKSBk9d1OwxODUx",
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
    "microregiao": "Salgado",
    "link": "https://t.me/+0k6QOhkbwqc5ZDcx",
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
    "microregiao": "Cametá",
    "link": "https://t.me/+a5ndsmZ4YTg4ZGQx",
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
    "microregiao": "Guamá",
    "link": "https://t.me/+b4STrHJLPvdlNWQx",
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
    "microregiao": "Altamira",
    "link": "https://t.me/+szJwE7ao1m80ZTYx",
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
    "microregiao": "Paragominas",
    "link": "https://t.me/+BlczR6T6um40MTU5",
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
    "microregiao": "Parauapebas",
    "link": "https://t.me/+lpmoU8pzGZlhZGU5",
    "status": "Ativo"
  },
  {
    "estado": "PA",
    "microregiao": "Marabá",
    "link": "https://t.me/+XPMHlx8sMO1jM2Q5",
    "status": "Ativo"
  },
  {
    "microregiao": "Redenção",
    "estado": "PA",
    "link": "https://t.me/+KNr7wTkewCJjZWIx",
    "status": "Ativo"
  },
  {
    "microregiao": "Conceição do Araguaia",
    "estado": "PA",
    "link": "https://t.me/+X3GXNAoSvJhhYzEx",
    "status": "Ativo"
  },
  {
    "microregiao": "Oiapoque",
    "estado": "AP",
    "link": "https://t.me/+zCI62cgHve9mYzUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Amapá",
    "estado": "AP",
    "link": "https://t.me/+EFxhj3rhdUBiYzhh",
    "status": "Ativo"
  },
  {
    "microregiao": "Macapá",
    "estado": "AP",
    "link": "https://t.me/+gC6OK57SM-4wYWFh",
    "status": "Ativo"
  },
  {
    "microregiao": "Mazagão",
    "estado": "AP",
    "link": "https://t.me/+1K3ZkvNUqxw0MmUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Bico do Papagaio",
    "estado": "TO",
    "link": "https://t.me/+viJKs-Vqt_RiY2Zh",
    "status": "Ativo"
  },
  {
    "microregiao": "Araguaína",
    "estado": "TO",
    "link": "https://t.me/+4AnIW9cE0sBiNTRh",
    "status": "Ativo"
  },
  {
    "microregiao": "Miracema do Tocantins",
    "estado": "TO",
    "link": "https://t.me/+dZqyq7opl_0zMTkx",
    "status": "Ativo"
  },
  {
    "microregiao": "Rio Formoso",
    "estado": "TO",
    "link": "https://t.me/+O3C_f6MamrAwMmEx",
    "status": "Ativo"
  },
  {
    "microregiao": "Gurupi",
    "estado": "TO",
    "link": "https://t.me/+VM-79Fm3iV01Mjhh",
    "status": "Ativo"
  },
  {
    "microregiao": "Porto Nacional",
    "estado": "TO",
    "link": "https://t.me/+ImdKAmPiXeRiZGIx",
    "status": "Ativo"
  },
  {
    "microregiao": "Jalapão",
    "estado": "TO",
    "link": "https://t.me/+dbKk2Yp3Vjw5NjRh",
    "status": "Ativo"
  },
  {
    "microregiao": "Dianópolis",
    "estado": "TO",
    "link": "https://t.me/+RZ97MFafh7EyMzQx",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral Ocidental Maranhense",
    "estado": "MA",
    "link": "https://t.me/+Y1Uni2QyV3xmYzUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Aglomeração Urbana de São Luís",
    "estado": "MA",
    "link": "https://t.me/+9o9iPZgv46syOGUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Rosário",
    "estado": "MA",
    "link": "https://t.me/+xy8H0U6zoFA1ZWVh",
    "status": "Ativo"
  },
  {
    "microregiao": "Lençóis Maranhenses",
    "estado": "MA",
    "link": "https://t.me/+wXgpBWPX2lI2MWUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Baixada Maranhense",
    "estado": "MA",
    "link": "https://t.me/+5m7hoGqY5PRhNzgx",
    "status": "Ativo"
  },
  {
    "microregiao": "Itapecuru Mirim",
    "estado": "MA",
    "link": "https://t.me/+dqJEZpbOJKcwN2Ux",
    "status": "Ativo"
  },
  {
    "microregiao": "Gurupi",
    "estado": "MA",
    "link": "https://t.me/+Vq1U4VR0SDkzZDYx",
    "status": "Ativo"
  },
  {
    "microregiao": "Pindaré",
    "estado": "MA",
    "link": "https://t.me/+PZDWqrmRFTY1ZTVh",
    "status": "Ativo"
  },
  {
    "microregiao": "Imperatriz",
    "estado": "MA",
    "link": "https://t.me/+vtHH-L2IpvRhODZh",
    "status": "Ativo"
  },
  {
    "microregiao": "Médio Mearim",
    "estado": "MA",
    "link": "https://t.me/+9cL97XqyY0Y4MmIx",
    "status": "Ativo"
  },
  {
    "microregiao": "Alto Mearim e Grajaú",
    "estado": "MA",
    "link": "https://t.me/+V8-rzi3DNyE5NzBh",
    "status": "Ativo"
  },
  {
    "microregiao": "Presidente Dutra",
    "estado": "MA",
    "link": "https://t.me/+eAbpjk_-QMpjOWZh",
    "status": "Ativo"
  },
  {
    "microregiao": "Baixo Parnaíba Maranhense",
    "estado": "MA",
    "link": "https://t.me/+zpysFh19KwM2NDEx",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapadinha",
    "estado": "MA",
    "link": "https://t.me/+r5YiL-gKATw0Nzkx",
    "status": "Ativo"
  },
  {
    "microregiao": "Codó",
    "estado": "MA",
    "link": "https://t.me/+YYBFaVkvS1w5M2Yx",
    "status": "Ativo"
  },
  {
    "microregiao": "Coelho Neto",
    "estado": "MA",
    "link": "https://t.me/+gCgfJzoileZkMjJh",
    "status": "Ativo"
  },
  {
    "microregiao": "Caxias",
    "estado": "MA",
    "link": "https://t.me/+pUsVmtuBYJ44NzU5",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapadas do Alto Itapecuru",
    "estado": "MA",
    "link": "https://t.me/+xl7PFX7B_1g4NGMx",
    "status": "Ativo"
  },
  {
    "microregiao": "Porto Franco",
    "estado": "MA",
    "link": "https://t.me/+3LXHaY4Dg-Q1YTdh",
    "status": "Ativo"
  },
  {
    "microregiao": "Gerais de Balsas",
    "estado": "MA",
    "link": "https://t.me/+cKhofUjhGLo0OTkx",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapadas das Mangabeiras",
    "estado": "MA",
    "link": "https://t.me/+ZNB09tnLkwM5MDMx",
    "status": "Ativo"
  },
  {
    "microregiao": "Baixo Parnaíba Piauiense",
    "estado": "PI",
    "link": "https://t.me/+BBuUsYcyt9E0NmUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral Piauiense",
    "estado": "PI",
    "link": "https://t.me/+bw5L5x7S0pRkM2Ux",
    "status": "Ativo"
  },
  {
    "microregiao": "Teresina",
    "estado": "PI",
    "link": "https://t.me/+UkgIXloyB9w2ZDVh",
    "status": "Ativo"
  },
  {
    "microregiao": "Campo Maior",
    "estado": "PI",
    "link": "https://t.me/+vs6O5hVO9lIzNTkx",
    "status": "Ativo"
  },
  {
    "microregiao": "Médio Parnaíba Piauiense",
    "estado": "PI",
    "link": "https://t.me/+vcp-3NJwSoVhMmJh",
    "status": "Ativo"
  },
  {
    "microregiao": "Valença do Piauí",
    "estado": "PI",
    "link": "https://t.me/+W1ACRcUjdFBiYmIx",
    "status": "Ativo"
  },
  {
    "microregiao": "Alto Parnaíba Piauiense",
    "estado": "PI",
    "link": "https://t.me/+xWT4k8-_c4hkMzQx",
    "status": "Ativo"
  },
  {
    "microregiao": "Bertolínia",
    "estado": "PI",
    "link": "https://t.me/+za_TAXMHj9g1NmEx",
    "status": "Ativo"
  },
  {
    "microregiao": "Floriano",
    "estado": "PI",
    "link": "https://t.me/+3RGXofsweHMxMmQx",
    "status": "Ativo"
  },
  {
    "microregiao": "Alto Médio Gurguéia",
    "estado": "PI",
    "link": "https://t.me/+utouJaFA4u03OTA5",
    "status": "Ativo"
  },
  {
    "microregiao": "São Raimundo Nonato",
    "estado": "PI",
    "link": "https://t.me/+vn97dqw7Xo8wNDkx",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapadas do Extremo Sul Piauiense",
    "estado": "PI",
    "link": "https://t.me/+C0VGid1x7N5kYjgx",
    "status": "Ativo"
  },
  {
    "microregiao": "Picos",
    "estado": "PI",
    "link": "https://t.me/+8G7YBGcxDPo5NjVh",
    "status": "Ativo"
  },
  {
    "microregiao": "Pio IX",
    "estado": "PI",
    "link": "https://t.me/+B1fjxrjhpsZlOTFh",
    "status": "Ativo"
  },
  {
    "microregiao": "Alto Médio Canindé",
    "estado": "PI",
    "link": "https://t.me/+7Tu5vHUPnPM0Mzlh",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral de Camocim e Acaraú",
    "estado": "CE",
    "link": "https://t.me/+_1ws4Wj6Q8JhZDJh",
    "status": "Ativo"
  },
  {
    "microregiao": "Ibiapaba",
    "estado": "CE",
    "link": "https://t.me/+mJXiq4gQGz5iYmQx",
    "status": "Ativo"
  },
  {
    "microregiao": "Coreaú",
    "estado": "CE",
    "link": "https://t.me/+xn5S09JstGBmZWRh",
    "status": "Ativo"
  },
  {
    "microregiao": "Meruoca",
    "estado": "CE",
    "link": "https://t.me/+pu1tzb-Vxgs5YTgx",
    "status": "Ativo"
  },
  {
    "microregiao": "Sobral",
    "estado": "CE",
    "link": "https://t.me/+_cE05SQP7601YmFh",
    "status": "Ativo"
  },
  {
    "microregiao": "Ipu",
    "estado": "CE",
    "link": "https://t.me/+fOsi5kVKy-o5NDJh",
    "status": "Ativo"
  },
  {
    "microregiao": "Santa Quitéria",
    "estado": "CE",
    "link": "https://t.me/+fepb1TXtNGRhZWUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Itapipoca",
    "estado": "CE",
    "link": "https://t.me/+fQ3SLRzZKtQ5NGIx",
    "status": "Ativo"
  },
  {
    "microregiao": "Baixo Curu",
    "estado": "CE",
    "link": "https://t.me/+VZ9T_fE8f1k1NDRh",
    "status": "Ativo"
  },
  {
    "microregiao": "Uruburetama",
    "estado": "CE",
    "link": "https://t.me/+Yii6d72FLKw1ZjAx",
    "status": "Ativo"
  },
  {
    "microregiao": "Médio Curu",
    "estado": "CE",
    "link": "https://t.me/+1xyldRl1yxgxNTBh",
    "status": "Ativo"
  },
  {
    "microregiao": "Canindé",
    "estado": "CE",
    "link": "https://t.me/+Lem2QNqXNxpiYjM5",
    "status": "Ativo"
  },
  {
    "microregiao": "Baturité",
    "estado": "CE",
    "link": "https://t.me/+0nZDUj3EL7MwNTlh",
    "status": "Ativo"
  },
  {
    "microregiao": "Chorozinho",
    "estado": "CE",
    "link": "https://t.me/+o8uL93qAqpQ2M2Ex",
    "status": "Ativo"
  },
  {
    "microregiao": "Cascavel",
    "estado": "CE",
    "link": "https://t.me/+gUDVfNd8-dI4M2M5",
    "status": "Ativo"
  },
  {
    "microregiao": "Fortaleza",
    "estado": "CE",
    "link": "https://t.me/+kpAXAgQzb_1kNTVh",
    "status": "Ativo"
  },
  {
    "microregiao": "Pacajus",
    "estado": "CE",
    "link": "https://t.me/+v8xrK2KrgrAzNjUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Sertão de Cratéus",
    "estado": "CE",
    "link": "https://t.me/+zL6Fh-GS86M2ZDEx",
    "status": "Ativo"
  },
  {
    "microregiao": "Sertão de Quixeramobim",
    "estado": "CE",
    "link": "https://t.me/+ts1dMF8NMogzMWMx",
    "status": "Ativo"
  },
  {
    "microregiao": "Sertão de Inhamuns",
    "estado": "CE",
    "link": "https://t.me/+r0uzFrl7NsszN2Rh",
    "status": "Ativo"
  },
  {
    "microregiao": "Sertão de Senador Pompeu",
    "estado": "CE",
    "link": "https://t.me/+XuwEWFwbpKI0YTI5",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral de Aracati",
    "estado": "CE",
    "link": "https://t.me/+M69xu9txaoxkMDNh",
    "status": "Ativo"
  },
  {
    "microregiao": "Baixo Jaguaribe",
    "estado": "CE",
    "link": "https://t.me/+VJXM8YGC3QpkNzQ5",
    "status": "Ativo"
  },
  {
    "microregiao": "Médio Jaguaribe",
    "estado": "CE",
    "link": "https://t.me/+xh3laWr-cIllMGI5",
    "status": "Ativo"
  },
  {
    "microregiao": "Serra do Pereiro",
    "estado": "CE",
    "link": "https://t.me/+Gs-HkDOVvKJjM2Jh",
    "status": "Ativo"
  },
  {
    "microregiao": "Iguatu",
    "estado": "CE",
    "link": "https://t.me/+d-bGygzVQaQ1OTIx",
    "status": "Ativo"
  },
  {
    "microregiao": "Várzea Alegre",
    "estado": "CE",
    "link": "https://t.me/+De5VD0_gvzwyMWYx",
    "status": "Ativo"
  },
  {
    "microregiao": "Lavras da Mangabeira",
    "estado": "CE",
    "link": "https://t.me/+zDtBXDiJRqw5NmIx",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapada do Araripe",
    "estado": "CE",
    "link": "https://t.me/+fsR_2LBHGto4MmI5",
    "status": "Ativo"
  },
  {
    "microregiao": "Caririaçu",
    "estado": "CE",
    "link": "https://t.me/+hoaYVn7LLKo1NDUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Barro",
    "estado": "CE",
    "link": "https://t.me/+hJOY_6hL5xVmNmNh",
    "status": "Ativo"
  },
  {
    "microregiao": "Cariri",
    "estado": "CE",
    "link": "https://t.me/+7fVSgI3AM-00MWUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Brejo Santo",
    "estado": "CE",
    "link": "https://t.me/+3Pkti7RIq41mNDNh",
    "status": "Ativo"
  },
  {
    "microregiao": "Mossoró",
    "estado": "RN",
    "link": "https://t.me/+uYri4NPsNiQwMTAx",
    "status": "Ativo"
  },
  {
    "microregiao": "Chapada do Apodi",
    "estado": "RN",
    "link": "https://t.me/+-SNdwMsx5lgwNGRh",
    "status": "Ativo"
  },
  {
    "microregiao": "Médio Oeste",
    "estado": "RN",
    "link": "https://t.me/+g8FfRPJnVC42NWUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Vale do Açu",
    "estado": "RN",
    "link": "https://t.me/+VZXDMIOYeBgzZmZh",
    "status": "Ativo"
  },
  {
    "microregiao": "Serra de São Miguel",
    "estado": "RN",
    "link": "https://t.me/+FMF9q3ETeQs0MTkx",
    "status": "Ativo"
  },
  {
    "microregiao": "Pau dos Ferros",
    "estado": "RN",
    "link": "https://t.me/+9uEFPEreAy9lYzgx",
    "status": "Ativo"
  },
  {
    "microregiao": "Umarizal",
    "estado": "RN",
    "link": "https://t.me/+q9BG32rhf_M4Mjcx",
    "status": "Ativo"
  },
  {
    "microregiao": "Macau",
    "estado": "RN",
    "link": "https://t.me/+ggHHMBEbgWo0YzYx",
    "status": "Ativo"
  },
  {
    "microregiao": "Angicos",
    "estado": "RN",
    "link": "https://t.me/+igpdr1oXUNA5YjAx",
    "status": "Ativo"
  },
  {
    "microregiao": "Serra de Santana",
    "estado": "RN",
    "link": "https://t.me/+mK5RRk4-g59iZWMx",
    "status": "Ativo"
  },
  {
    "microregiao": "Seridó Ocidental",
    "estado": "RN",
    "link": "https://t.me/+2C5cF9G6LiM4MDEx",
    "status": "Ativo"
  },
  {
    "microregiao": "Seridó Oriental",
    "estado": "RN",
    "link": "https://t.me/+vX9vi-0Uur5kMDdh",
    "status": "Ativo"
  },
  {
    "microregiao": "Baixa Verde",
    "estado": "RN",
    "link": "https://t.me/+k9JZKb8cmSo0MzY5",
    "status": "Ativo"
  },
  {
    "microregiao": "Borborema Potiguar",
    "estado": "RN",
    "link": "https://t.me/+d-lE5nSFhZAxMjIx",
    "status": "Ativo"
  },
  {
    "microregiao": "Agreste Potiguar",
    "estado": "RN",
    "link": "https://t.me/+L6NcmVkp7L5hYTRh",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral Nordeste",
    "estado": "RN",
    "link": "https://t.me/+P9B6YSqrrstmN2Qx",
    "status": "Ativo"
  },
  {
    "microregiao": "Macaíba",
    "estado": "RN",
    "link": "https://t.me/+HLXKXI34KgYwMDUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Natal",
    "estado": "RN",
    "link": "https://t.me/+ttO7VBY3pzYxYjVh",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral Sul",
    "estado": "RN",
    "link": "https://t.me/+G89IJOMkZJxjNGMx",
    "status": "Ativo"
  },
  {
    "microregiao": "Catolé do Rocha",
    "estado": "PB",
    "link": "https://t.me/+srFayXJYnfI3MDkx",
    "status": "Ativo"
  },
  {
    "microregiao": "Cajazeiras",
    "estado": "PB",
    "link": "https://t.me/+217XOffsjxU5YjEx",
    "status": "Ativo"
  },
  {
    "microregiao": "Sousa",
    "estado": "PB",
    "link": "https://t.me/+dclLrzjsCu42NjUx",
    "status": "Ativo"
  },
  {
    "microregiao": "Patos",
    "estado": "PB",
    "link": "https://t.me/+nNZXgN4VzrkyYmEx",
    "status": "Ativo"
  },
  {
    "microregiao": "Piancó",
    "estado": "PB",
    "link": "https://t.me/+5enxboHMTuoxY2Mx",
    "status": "Ativo"
  },
  {
    "microregiao": "Itaporanga",
    "estado": "PB",
    "link": "https://t.me/+HySX3MSA174xMmU5",
    "status": "Ativo"
  },
  {
    "microregiao": "Serra do Teixeira",
    "estado": "PB",
    "link": "https://t.me/+pZnnEMtZrsc4MzYx",
    "status": "Ativo"
  },
  {
    "microregiao": "Seridó Ocidental Paraibano",
    "estado": "PB",
    "link": "https://t.me/+l15wlqFOwBw5YWZh",
    "status": "Ativo"
  },
  {
    "microregiao": "Seridó Oriental Paraibano",
    "estado": "PB",
    "link": "https://t.me/+BFy6U5Aabs5iZmQx",
    "status": "Ativo"
  },
  {
    "microregiao": "Cariri Ocidental",
    "estado": "PB",
    "link": "https://t.me/+rn46nMqrxHU5MDg5",
    "status": "Ativo"
  },
  {
    "microregiao": "Cariri Oriental",
    "estado": "PB",
    "link": "https://t.me/+hUKkD15LcqNkYTdh",
    "status": "Ativo"
  },
  {
    "microregiao": "Curimataú Ocidental",
    "estado": "PB",
    "link": "https://t.me/+mblG8eDID8Y3OTZh",
    "status": "Ativo"
  },
  {
    "microregiao": "Curimataú Oriental",
    "estado": "PB",
    "link": "https://t.me/+vZATUTy36pgzY2Fh",
    "status": "Ativo"
  },
  {
    "microregiao": "Esperança",
    "estado": "PB",
    "link": "https://t.me/+gCkFLS93kRpiODMx",
    "status": "Ativo"
  },
  {
    "microregiao": "Brejo Paraibano",
    "estado": "PB",
    "link": "https://t.me/+djQGMG-1ZjBjNTMx",
    "status": "Ativo"
  },
  {
    "microregiao": "Guarabira",
    "estado": "PB",
    "link": "https://t.me/+pH4wCGkGwN8zMTcx",
    "status": "Ativo"
  },
  {
    "microregiao": "Campina Grande",
    "estado": "PB",
    "link": "https://t.me/+hZi9CUPHFNRlODQx",
    "status": "Ativo"
  },
  {
    "microregiao": "Itabaiana",
    "estado": "PB",
    "link": "https://t.me/+UROUN6_1ZUc4MGEx",
    "status": "Ativo"
  },
  {
    "microregiao": "Umbuzeiro",
    "estado": "PB",
    "link": "https://t.me/+OIxi-IuYvwhhZjcx",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral Norte",
    "estado": "PB",
    "link": "https://t.me/+nDPCXfLEbt1lNTFh",
    "status": "Ativo"
  },
  {
    "microregiao": "Sapé",
    "estado": "PB",
    "link": "https://t.me/+sJUgmIoh9xQyMjAx",
    "status": "Ativo"
  },
  {
    "microregiao": "João Pessoa",
    "estado": "PB",
    "link": "https://t.me/+YzXjCFrR3scyN2Q5",
    "status": "Ativo"
  },
  {
    "microregiao": "Litoral Sul",
    "estado": "PB",
    "link": "https://t.me/+HXEPnTIYiac0ODU5",
    "status": "Ativo"
  },
  {
    "microregiao": "Araripina",
    "estado": "PE",
    "link": "https://t.me/+UUR0xo86CChhODJh",
    "status": "Ativo"
  },
  {
    "microregiao": "Salgueiro",
    "estado": "PE",
    "link": "https://t.me/+IHb63WRvxwZlMTFh",
    "status": "Ativo"
  },
  {
    "microregiao": "Pajeú",
    "estado": "PE",
    "link": "https://t.me/+ZK17_d3LcM9kYjMx",
    "status": "Ativo"
  },
  {
    "microregiao": "Sertão do Moxotó",
    "estado": "PE",
    "link": "https://t.me/+WBNl3DA0TKM2NDhh",
    "status": "Ativo"
  },
  {
    "microregiao": "Petrolina",
    "estado": "PE",
    "link": "https://t.me/+tfCY8_Z_9pMxZjgx",
    "status": "Ativo"
  },
  {
    "microregiao": "Itaparica",
    "estado": "PE",
    "link": "https://t.me/+nqFug_MIqPdmOGJh",
    "status": "Ativo"
  },
  {
    "microregiao": "Vale do Ipanema",
    "estado": "PE",
    "link": "https://t.me/+QFVjtUKL8DAzOWVh",
    "status": "Ativo"
  },
  {
    "microregiao": "Vale do Ipojuca",
    "estado": "PE",
    "link": "https://t.me/+xprCYiW_OQA3ZWVh",
    "status": "Ativo"
  },
  {
    "microregiao": "Alto Capibaribe",
    "estado": "PE",
    "link": "https://t.me/+aSrM8tYWSFE5OWI5",
    "status": "Ativo"
  },
  {
    "microregiao": "Médio Capibaribe",
    "estado": "PE",
    "link": "https://t.me/+qC4zcooiWoZhYmFh",
    "status": "Ativo"
  },
  {
    "microregiao": "Garanhuns",
    "estado": "PE",
    "link": "https://t.me/+86qk4LaFujxmODkx",
    "status": "Ativo"
  },
  {
    "microregiao": "Brejo Pernambucano",
    "estado": "PE",
    "link": "https://t.me/+8Thkkv__FNo2Y2Ux",
    "status": "Ativo"
  },
  {
    "microregiao": "Mata Setentrional Pernambucana",
    "estado": "PE",
    "link": "https://t.me/+2_45VRfYXoRmYTU5",
    "status": "Ativo"
  },
  {
    "microregiao": "Vitória de Santo Antão",
    "estado": "PE",
    "link": "https://t.me/+Fk-gQx6zDL03MmMx",
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
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Cotegipe",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Santa Maria da Vitória",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Juazeiro",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Paulo Afonso",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Barra",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Bom Jesus da Lapa",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Senhor do Bonfim",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Irecê",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Jacobina",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Itaberaba",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Feira de Santana",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Jeremoabo",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Euclides da Cunha",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Ribeira do Pombal",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Serrinha",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Alagoinhas",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Entre Rios",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Catu",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Santo Antônio de Jesus",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Salvador",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Boquira",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Seabra",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Jequié",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Livramento do Brumado",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Guanambi",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Brumado",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Vitória da Conquista",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Itapetinga",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Valença",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Ilhéus-Itabuna",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Porto Seguro",
    "estado": "BA",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Unaí",
    "estado": "MG",
    "link": "https://t.me/+b2awyXZZt341NjBh",
    "linkWhats": "https://chat.whatsapp.com/G3QsU3FFhBeKUGL6qCD9Wz",
    "status": "Ativo"
  },
  {
    "microregiao": "Paracatu",
    "estado": "MG",
    "link": "https://t.me/+8dp2VSNAvwA3NTBh",
    "linkWhats": "https://chat.whatsapp.com/KsOrP1iKp09DcZqYDkLN9F",
    "status": "Ativo"
  },
  {
    "microregiao": "Januária",
    "estado": "MG",
    "link": "https://t.me/+s2zwBdpyOL4wOGFh",
    "linkWhats": "https://chat.whatsapp.com/KLiaaJ1FfiNDpJa1OzOxFs",
    "status": "Ativo"
  },
  {
    "microregiao": "Janaúba",
    "estado": "MG",
    "link": "https://t.me/+Hmyg-MTU-2c2YTM5",
    "linkWhats": "https://chat.whatsapp.com/JDglsLNApNt1K3zxexYHNW",
    "status": "Ativo"
  },
  {
    "microregiao": "Salinas",
    "estado": "MG",
    "link": "https://t.me/+4eS5qYg1TIkxZWRh",
    "linkWhats": "https://chat.whatsapp.com/HSZu30KBG5bEhV1Mp9s27l",
    "status": "Ativo"
  },
  {
    "microregiao": "Pirapora",
    "estado": "MG",
    "link": "https://t.me/+g-wtnrMjdmJkYzRh",
    "linkWhats": "https://chat.whatsapp.com/FqGY49V86Y8FCiUmaeSVOq",
    "status": "Ativo"
  },
  {
    "microregiao": "Montes Claros",
    "estado": "MG",
    "link": "https://t.me/+HCYrNRcC5FszMmEx",
    "linkWhats": "https://chat.whatsapp.com/FyfgebrnjhE2DBULQDF9Ce",
    "status": "Ativo"
  },
  {
    "microregiao": "Grão Mogol",
    "estado": "MG",
    "link": "https://t.me/+JfkS9n9KY3c5OTk5",
    "linkWhats": "https://chat.whatsapp.com/LkjIdtkYBsB09PtxgTASyf",
    "status": "Ativo"
  },
  {
    "microregiao": "Bocaiúva",
    "estado": "MG",
    "link": "https://t.me/+mBekpoZQDuAxMWIx",
    "linkWhats": "https://chat.whatsapp.com/K4Km3XYcaqCGO0R0jEU5yP",
    "status": "Ativo"
  },
  {
    "microregiao": "Diamantina",
    "estado": "MG",
    "link": "https://t.me/+X7EHAytIo7hlYjNh",
    "linkWhats": "https://chat.whatsapp.com/HDdy5yIiDFzD96R7mTsKIX",
    "status": "Ativo"
  },
  {
    "microregiao": "Capelinha",
    "estado": "MG",
    "link": "https://t.me/+ZFpchFVSkQFhN2Jh",
    "linkWhats": "https://chat.whatsapp.com/Jy6vo91pMlnGw0KoLuVYrr",
    "status": "Ativo"
  },
  {
    "microregiao": "Araçuaí",
    "estado": "MG",
    "link": "https://t.me/+wYNYbNueHoExMjlh",
    "linkWhats": "https://chat.whatsapp.com/BkNKTznZ88N227d7lUOwCU",
    "status": "Ativo"
  },
  {
    "microregiao": "Pedra Azul",
    "estado": "MG",
    "link": "https://t.me/+0fXTiXeNhlA1OGYx",
    "linkWhats": "https://chat.whatsapp.com/H9GpmvytPAzKZPBqI2xGbt",
    "status": "Ativo"
  },
  {
    "microregiao": "Almenara",
    "estado": "MG",
    "link": "https://t.me/+unRfm94vzms2Njdh",
    "linkWhats": "https://chat.whatsapp.com/DAPc8CpTBm43bJmKsSz2ek",
    "status": "Ativo"
  },
  {
    "microregiao": "Teófilo Otoni",
    "estado": "MG",
    "link": "https://t.me/+d4DHTaon8xUxYTgx",
    "linkWhats": "https://chat.whatsapp.com/KErQ4mLnqpK94EVsDT8FA0",
    "status": "Ativo"
  },
  {
    "microregiao": "Nanuque",
    "estado": "MG",
    "link": "https://t.me/+GsLX0NkWABg0NTEx",
    "linkWhats": "https://chat.whatsapp.com/Lq9Fz8ssIYMHphOkK6DrQK",
    "status": "Ativo"
  },
  {
    "microregiao": "Ituiutaba",
    "estado": "MG",
    "link": "https://t.me/+zkSI1ZNIt8xiOGM5",
    "linkWhats": "https://chat.whatsapp.com/Ims8wElO5Rr5bJX7SfFQF6",
    "status": "Ativo"
  },
  {
    "microregiao": "Uberlândia",
    "estado": "MG",
    "link": "https://t.me/+WahoOMs9Ap4zMGU5",
    "linkWhats": "https://chat.whatsapp.com/H0ZLIB7gMNVEPO1nYEWhTy",
    "status": "Ativo"
  },
  {
    "microregiao": "Patrocínio",
    "estado": "MG",
    "link": "https://t.me/+fZtqhB1Z0S9hZjUx",
    "linkWhats": "https://chat.whatsapp.com/CTezl16QBQv8ud5VcDqDeQ",
    "status": "Ativo"
  },
  {
    "microregiao": "Patos de Minas",
    "estado": "MG",
    "link": "https://t.me/+psRURStcLGcyZTJh",
    "linkWhats": "https://chat.whatsapp.com/G3ZFvCACRgg3FjvWSq9qJq",
    "status": "Ativo"
  },
  {
    "microregiao": "Frutal",
    "estado": "MG",
    "link": "https://t.me/+RL6gRSd6cg5jNDkx",
    "linkWhats": "https://chat.whatsapp.com/Hz3WLOhk3tHFragyc5fsXb",
    "status": "Ativo"
  },
  {
    "microregiao": "Uberaba",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Araxá",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Três Marias",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Curvelo",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Bom Despacho",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Sete Lagoas",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Conceição do Mato Dentro",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Pará de Minas",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Belo Horizonte",
    "estado": "MG",
    "link": "https://t.me/+QjtMnGxDLEhhZWRh",
    "linkWhats": "https://chat.whatsapp.com/J29rY5lz9b191ZR1KN5Auk",
    "status": "Ativo"
  },
  {
    "microregiao": "Itabira",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Itaguara",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Ouro Preto",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Conselheiro Lafaiete",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Guanhães",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Peçanha",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Governador Valadares",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Mantena",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Ipatinga",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Caratinga",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Aimorés",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Piuí",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Divinópolis",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Formiga",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Campo Belo",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Oliveira",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Passos",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "São Sebastião do Paraíso",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Alfenas",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Varginha",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Poços de Caldas",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Pouso Alegre",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Santa Rita do Sapucaí",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "São Lourenço",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Andrelândia",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Itajubá",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Lavras",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "São João Del Rei",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Barbacena",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Ponte Nova",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Manhuaçu",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Viçosa",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Muriaé",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Ubá",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Juiz de Fora",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Cataguases",
    "estado": "MG",
    "link": "em-breve.html",
    "status": "Em Breve"
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
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Santo Antônio de Pádua",
    "estado": "RJ",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Campos dos Goytacazes",
    "estado": "RJ",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Macaé",
    "estado": "RJ",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Três Rios",
    "estado": "RJ",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Cantagalo-Cordeiro",
    "estado": "RJ",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Nova Friburgo",
    "estado": "RJ",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Santa Maria Madalena",
    "estado": "RJ",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Bacia de São João",
    "estado": "RJ",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Lagos",
    "estado": "RJ",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Vale do Paraíba Fluminense",
    "estado": "RJ",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Barra do Piraí",
    "estado": "RJ",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Baía da Ilha Grande",
    "estado": "RJ",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Vassouras",
    "estado": "RJ",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Serrana",
    "estado": "RJ",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Macacu-Caceribu",
    "estado": "RJ",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Itaguaí",
    "estado": "RJ",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Rio de Janeiro",
    "estado": "RJ",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Jales",
    "estado": "SP",
    "link": "https://t.me/+Ikc6sMxCVyg0MDFh",
    "linkWhats": "https://chat.whatsapp.com/FZr7WVwPN9F9efUk4txv1j",
    "status": "Ativo"
  },
  {
    "microregiao": "Fernandópolis",
    "estado": "SP",
    "link": "https://t.me/+K3xQO8NfBZRhNWEx",
    "linkWhats": "https://chat.whatsapp.com/JWrWtmpMenF7hw4CXxrznh",
    "status": "Ativo"
  },
  {
    "microregiao": "Votuporanga",
    "estado": "SP",
    "link": "https://t.me/+gwl_dUt-0nAzMDlh",
    "linkWhats": "https://chat.whatsapp.com/GXJu0XMwfRK7xGlaFHVSas",
    "link": "em-breve.html",
    "status": "Ativo"
  },
  {
    "microregiao": "São José do Rio Preto",
    "estado": "SP",
    "link": "https://t.me/+Gpalqme9wzg2MmUx",
    "linkWhats": "https://chat.whatsapp.com/FvhjeInIvMx2dD4IUbRbk1",
    "status": "Ativo"
  },
  {
    "microregiao": "Catanduva",
    "estado": "SP",
    "link": "https://t.me/+3-MzxmViJQIyYTUx",
    "linkWhats": "https://chat.whatsapp.com/GisCvAm3AhPLucJtTgaPtK",
    "status": "Ativo"
  },
  {
    "microregiao": "Auriflama",
    "estado": "SP",
    "link": "https://t.me/+UYj5e4l4qB85MTQx",
    "linkWhats": "https://chat.whatsapp.com/FY7Y2GWtySMCdniSHQ6zGg",
    "status": "Ativo"
  },
  {
    "microregiao": "Nhandeara",
    "estado": "SP",
    "link": "https://t.me/+tclHxm2WVCQzMDcx",
    "linkWhats": "https://chat.whatsapp.com/IafEuzNKaUzIQpWoVCc11C",
    "status": "Ativo"
  },
  {
    "microregiao": "Novo Horizonte",
    "estado": "SP",
    "link": "https://t.me/+HvmQ3itg3AA3ZGZh",
    "linkWhats": "https://chat.whatsapp.com/GjaKqgBtl5b2bCH5CyfdqB",
    "status": "Ativo"
  },
  {
    "microregiao": "Barretos",
    "estado": "SP",
    "link": "https://t.me/+9rRE5A6fgbwzMTg5",
    "linkWhats": "https://chat.whatsapp.com/BhDsX2ZmQmy74VJ3BS2O1z",
    "status": "Ativo"
  },
  {
    "microregiao": "São Joaquim da Barra",
    "estado": "SP",
    "link": "https://t.me/+rUkHvGrUNGlmOWIx",     
    "linkWhats": "https://chat.whatsapp.com/FQ4xWRQ6JxKECaPl6vIQuv",
    "status": "Ativo"
  },
  {
    "microregiao": "Ituverava",
    "estado": "SP",
    "link": "https://t.me/+IcCX273768UwZjBh",
    "linkWhats": "https://chat.whatsapp.com/IjjIfLtWDFqLuoR1vaCG3z",
    "status": "Ativo"
  },
  {
    "microregiao": "Franca",
    "estado": "SP",
    "link": "https://t.me/+9rRE5A6fgbwzMTg5",
    "linkWhats": "https://chat.whatsapp.com/FOHtP9J5XFcJKoh2499goH",
    "status": "Ativo"
  },
  {
    "microregiao": "Jaboticabal",
    "estado": "SP",
    "link": "https://t.me/+nBjYukWunbw0MDgx",
    "linkWhats": "https://chat.whatsapp.com/I7h3KSrH8E46kJxqYAq9pB",
    "status": "Ativo"
  },
  {
    "microregiao": "Ribeirão Preto",
    "estado": "SP",
    "link": "https://t.me/+dEt4Du96tGxlOWE5",
    "linkWhats": "https://chat.whatsapp.com/JdWLTBfZNIzLVKfe3za46D",
    "status": "Ativo"
  },
  {
    "microregiao": "Batatais",
    "estado": "SP",
    "link": "https://t.me/+AbkXNg8xPY9jOTQx",
    "linkWhats": "https://chat.whatsapp.com/EfEm7suXxe8DlMSwQBPxWF",
    "status": "Ativo"
  },
  {
    "microregiao": "Andradina",
    "estado": "SP",
    "link": "https://t.me/+dsFS0NjdYwlhZTdh",
    "linkWhats": "https://chat.whatsapp.com/LHa2oKqrB6TKX93lP38jcC",
    "status": "Ativo"
  },
  {
    "microregiao": "Araçatuba",
    "estado": "SP",
    "link": "https://t.me/+mtD7QQn-5Jw0Nzkx",
    "linkWhats": "https://chat.whatsapp.com/KUNnYrx7ZzP5EnsVi8VwXX",
    "status": "Ativo"
  },
  {
    "microregiao": "Birigui",
    "estado": "SP",
    "link": "https://t.me/+5giOlAQi6gplNjZh",
    "linkWhats": "https://chat.whatsapp.com/DA6YFiealXmCcLinIsyjZn",
    "status": "Ativo"
  },
  {
    "microregiao": "Lins",
    "estado": "SP",
    "link": "https://t.me/+vMrKQYuELitlYzBh",
    "linkWhats": "https://chat.whatsapp.com/Ggcew6Y6wsUDQ48E7rmGiM",
    "status": "Ativo"
  },
  {
    "microregiao": "Bauru",
    "estado": "SP",
    "link": "https://t.me/+NCu4Vqi5zck3NDk5",
    "linkWhats": "https://chat.whatsapp.com/EFz24ydhDBF6f6JNh5mKtz",
    "status": "Ativo"
  },
  {
    "microregiao": "Jaú",
    "estado": "SP",
    "link": "https://t.me/+SikCJDMlIbsxMDkx",
    "linkWhats": "https://chat.whatsapp.com/HMxDmiNH6oFCFhqaupYyIm",
    "status": "Ativo"
  },
  {
    "microregiao": "Avaré",
    "estado": "SP",
    "link": "https://t.me/+XtiHZSTr96tiZTQx",
    "linkWhats": "https://chat.whatsapp.com/LDZAk6cH0jl3BQoau8nv1s",
    "status": "Ativo"
  },
  {
    "microregiao": "Botucatu",
    "estado": "SP",
    "link": "https://t.me/+iH_3YVKTYg43Y2M5",
    "linkWhats": "https://chat.whatsapp.com/HbIMP55bgMl6NfMRWizRuT",
    "status": "Ativo"
  },
  {
    "microregiao": "Araraquara",
    "estado": "SP",
    "link": "https://t.me/+W0TsJN0DOnhkMzM5",
    "linkWhats": "https://chat.whatsapp.com/CnKaxHlUhSJLCqQMyqKq7M",
    "status": "Ativo"
  },
  {
    "microregiao": "São Carlos",
    "estado": "SP",
    "link": "https://t.me/+7D3JeVhl0N5lODcx",
    "linkWhats": "https://chat.whatsapp.com/CM5M1mLX7vdKab1f5fF8XO",
    "status": "Ativo"
  },
  {
    "microregiao": "Rio Claro",
    "estado": "SP",
    "link": "https://t.me/+hhBsWTJmvPw5ZTIx",
    "linkWhats": "https://chat.whatsapp.com/CUy087grHDvINOSCPrt3IC",
    "status": "Ativo"
  },
  {
    "microregiao": "Limeira",
    "estado": "SP",
    "link": "https://t.me/+fjS5QQ0fjyJiY2Ix",
    "linkWhats": "https://chat.whatsapp.com/KYwGJ4Z0uwk9ZHfqbpg0GK",
    "status": "Ativo"
  },
  {
    "microregiao": "Piracicaba",
    "estado": "SP",
    "link": "https://t.me/+GC9l374RMK42NWRh",
    "linkWhats": "https://chat.whatsapp.com/F5lMOaumdgOCwWFGtdPgRc",
    "status": "Ativo"
  },
  {
    "microregiao": "Pirassununga",
    "estado": "SP",
    "link": "https://t.me/+2ljy_kxZWrAzMjM5",
    "linkWhats": "https://chat.whatsapp.com/IGzNRWjtv3i3u7FHw11dvN",
    "status": "Ativo"
  },
  {
    "microregiao": "São João da Boa Vista",
    "estado": "SP",
    "link": "https://t.me/+ijsJn2UqFyZlNTE5",
    "linkWhats": "https://chat.whatsapp.com/GB93pAdHF0u26aYXmKp7bL",
    "status": "Ativo"
  },
  {
    "microregiao": "Mogi Mirim",
    "estado": "SP",
    "link": "https://t.me/+YbbQg5IZj3cyOTVh",
    "linkWhats": "https://chat.whatsapp.com/JENtZDYqeag85O65iX8aiZ",
    "status": "Ativo"
  },
  {
    "microregiao": "Campinas",
    "estado": "SP",
    "link": "https://t.me/+iCVw6frzJlBiMTEx",
    "linkWhats": "https://chat.whatsapp.com/JMQtf8pqjK3AXmhQUF5hHv",
    "status": "Ativo"
  },
  {
    "microregiao": "Amparo",
    "estado": "SP",
    "link": "https://t.me/+-Q7KVRxXjYdhNjUx",
    "linkWhats": "https://chat.whatsapp.com/FicqCBhDplo3R3oBXeJ5b1",
    "status": "Ativo"
  },
  {
    "microregiao": "Dracena",
    "estado": "SP",
    "link": "https://t.me/+dBRnFpbYnuBjMDEx",
    "linkWhats": "https://chat.whatsapp.com/EiI5ayMelRGHzgyNEFk3q9",
    "status": "Ativo"
  },
  {
    "microregiao": "Adamantina",
    "estado": "SP",
    "link": "https://t.me/+DKYMx9S5ETQ0ZGVh",
    "linkWhats": "https://chat.whatsapp.com/GTBUTGN6eXtGajBidMIJu5",
    "status": "Ativo"
  },
  {
    "microregiao": "Presidente Prudente",
    "estado": "SP",
    "link": "https://t.me/+YdSMLWg6mMkxYjVh",
    "linkWhats": "https://chat.whatsapp.com/II0OqWo8cruA0VfA3lDpLn",
    "status": "Ativo"
  },
  {
    "microregiao": "Tupã",
    "estado": "SP",
    "link": "https://t.me/+N97BwkbYAQxlY2Mx",
    "linkWhats": "https://chat.whatsapp.com/Jcc0FvCQQQaHCGXKrbMV0R",
    "status": "Ativo"
  },
  {
    "microregiao": "Marília",
    "estado": "SP",
    "link": "https://t.me/+Jm9pGaKTFnVkM2Yx",
    "linkWhats": "https://chat.whatsapp.com/LNlxEB9ksIbGJfCIV6ic0g",
    "status": "Ativo"
  },
  {
    "microregiao": "Assis",
    "estado": "SP",
    "link": "https://t.me/+U6JCOfzul2Q4YWY5",
    "linkWhats": "https://chat.whatsapp.com/C32AmT6M5h3IyzQBJ8mgWV",
    "status": "Ativo"
  },
  {
    "microregiao": "Ourinhos",
    "estado": "SP",
    "link": "https://t.me/+xoPQmF18uLAzNTBh",
    "linkWhats": "https://chat.whatsapp.com/DvnVS9ZSSS70T16ujLeqH8",
    "status": "Ativo"
  },
  {
    "microregiao": "Itapeva",
    "estado": "SP",
    "link": "https://t.me/+UyQUMMQ-zkAyMzcx",
    "linkWhats": "https://chat.whatsapp.com/CB7fERSnasm7koMoVJkskG",
    "status": "Ativo"
  },
  {
    "microregiao": "Itapetininga",
    "estado": "SP",
    "link": "https://t.me/+LoEqegHbOx85MTdh",
    "linkWhats": "https://chat.whatsapp.com/JifQzE5xJJk4lccsYTuipj",
    "status": "Ativo"
  },
  {
    "microregiao": "Tatuí",
    "estado": "SP",
    "link": "https://t.me/+Ce6h3sHHiABmMjkx",
    "linkWhats": "https://chat.whatsapp.com/KEjvFQkOmCp7xbjYf8XKbE",
    "status": "Ativo"
  },
  {
    "microregiao": "Capão Bonito",
    "estado": "SP",
    "link": "https://t.me/+1j9d9XoHdN4xMjcx",
    "linkWhats": "https://chat.whatsapp.com/BV654MoFKDLDPreQ4Rlluv",
    "status": "Ativo"
  },
  {
    "microregiao": "Piedade",
    "estado": "SP",
    "link": "https://t.me/+8qi7hTCytAYzMTYx",   
    "linkWhats": "https://chat.whatsapp.com/DyZlM7n2S8j15vkjmyKyik",
    "status": "Ativo"
  },
  {
    "microregiao": "Sorocaba",
    "estado": "SP",
    "link": "https://t.me/+Y0HG4aFm89ljNGIx",
    "linkWhats": "https://chat.whatsapp.com/JnGpRK6kMfH3STDb0TKXrB",
    "status": "Ativo"
  },
  {
    "microregiao": "Jundiaí",
    "estado": "SP",
    "link": "https://t.me/+p65vSnWquzlkNzNh",
    "linkWhats": "https://chat.whatsapp.com/CUH6nPK9E7f17QzrMLOgBS",
    "status": "Ativo"
  },
  {
    "microregiao": "Bragança Paulista",
    "estado": "SP",
    "link": "https://t.me/+tWoz-u1tcOJhNzgx",
    "linkWhats": "https://chat.whatsapp.com/Gil2CQHVVi4FrTKkbymw7c",
    "status": "Ativo"
  },
  {
    "microregiao": "Campos do Jordão",
    "estado": "SP",
    "link": "https://t.me/+J_f88knTnkwxOWMx",
    "linkWhats": "https://chat.whatsapp.com/CQOEDfNNUKy0bhQhcDkr1V",
    "status": "Ativo"
  },
  {
    "microregiao": "São José dos Campos",
    "estado": "SP",
    "link": "https://t.me/+CD9YLmhX-t0zMTMx",
    "linkWhats": "https://chat.whatsapp.com/CUJn5fBn0fJGJcIqb77GtD",
    "status": "Ativo"
  },
  {
    "microregiao": "Guaratinguetá",
    "estado": "SP",
    "link": "https://t.me/+oJfKqE6CEZBmODcx",
    "linkWhats": "https://chat.whatsapp.com/DSoIdjRXh7P1NKhSRSFV8h",
    "status": "Ativo"
  },
  {
    "microregiao": "Bananal",
    "estado": "SP",
    "link": "https://t.me/+8ACUKqG1U5I4Yzgx",
    "linkWhats": "https://chat.whatsapp.com/DPUUKT09SGMCcvxVIN8wgu",
    "status": "Ativo"
  },
  {
    "microregiao": "Paraibuna/Paraitinga",
    "estado": "SP",
    "link": "https://t.me/+XXfDLsO5hPthZGEx",
    "linkWhats": "https://chat.whatsapp.com/H4TQk1xO8luAqMMA58Jn0u",
    "status": "Ativo"
  },
  {
    "microregiao": "Caraguatatuba",
    "estado": "SP",
    "link": "https://t.me/+pJJOXK7Rq5NhNzFh",
    "linkWhats": "https://chat.whatsapp.com/JM3VTfDwTC9J0Xg0irXThX",
    "status": "Ativo"
  },
  {
    "microregiao": "Registro",
    "estado": "SP",
    "link": "https://t.me/+Tjk5Y39zzgRjNmEx",
    "linkWhats": "https://chat.whatsapp.com/HCLAVtWMyz19URqqP1Q09G",
    "status": "Em Breve"
  },
  {
    "microregiao": "Itanhaém",
    "estado": "SP",
    "link": "https://t.me/+idxMq8HLNLw5MjQx",
    "linkWhats": "https://chat.whatsapp.com/ES5A4NYZrCWEIpOr4vcpjr",
    "status": "Ativo"
  },
  {
    "microregiao": "Osasco",
    "estado": "SP",
    "link": "https://t.me/+rhLP3qKRK9YzYWUx",
    "linkWhats": "https://chat.whatsapp.com/Ev4OgKMYh6HKGcaFbhTclZ",
    "status": "Ativo"
  },
  {
    "microregiao": "Franco da Rocha",
    "estado": "SP",
    "link": "https://t.me/+VGaR1OnuiL1hYjZh",
    "linkWhats": "https://chat.whatsapp.com/I4Rm9JzRaq1CmkLJfrEAXC",
    "status": "Ativo"
  },
  {
    "microregiao": "Guarulhos",
    "estado": "SP",
    "link": "https://t.me/+JTTYXsTW33ExYWM5",
    "linkWhats": "https://chat.whatsapp.com/DmiF2wwytUYJH9KywtOwjr",
    "status": "Ativo"
  },
  {
    "microregiao": "Itapecerica da Serra",
    "estado": "SP",
    "link": "https://t.me/+-2cFlWLdeBQzZGYx",
    "linkWhats": "https://chat.whatsapp.com/FOm1WWoa6hSFO4cnct9qqz",
    "status": "Ativo"
  },
  {
    "microregiao": "São Paulo",
    "estado": "SP",
    "link": "https://t.me/+q537ca1wtnU2MjJh",
    "linkWhats": "https://chat.whatsapp.com/Lf7qUU5AbPzIlvkFT1lwvp",
    "status": "Ativo"
  },
  {
    "microregiao": "Mogi das Cruzes",
    "estado": "SP",
    "link": "https://t.me/+ORobzaf1NfBiNWYx",
    "linkWhats": "https://chat.whatsapp.com/LlJuDdhFaDQKvit7coXzwK",
    "status": "Ativo"
  },
  {
    "microregiao": "Santos",
    "estado": "SP",
    "link": "https://t.me/+R8rmWQedhaM2ZmQx",
    "linkWhats": "https://chat.whatsapp.com/JqGWH5nsVn0KSnA4OrBDEi",
    "status": "Ativo"
  },
  {
    "microregiao": "Paranavaí",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Umuarama",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Cianorte",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Goioerê",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Campo Mourão",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Astorga",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Porecatu",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Floraí",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Maringá",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Apucarana",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Londrina",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Faxinal",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Ivaiporã",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Assaí",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Cornélio Procópio",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Jacarezinho",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Ibaiti",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Wenceslau Braz",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
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
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Paranaguá",
    "estado": "PR",
    "link": "em-breve.html",
    "status": "Em Breve"
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
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Chapecó",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Xanxerê",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Joaçaba",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Concórdia",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Canoinhas",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "São Bento do Sul",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Joinville",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Curitibanos",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Campos de Lages",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Rio do Sul",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Blumenau",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Itajaí",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Ituporanga",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Tijucas",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Florianópolis",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Tabuleiro",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Tubarão",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Criciúma",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
  },
  {
    "microregiao": "Araranguá",
    "estado": "SC",
    "link": "em-breve.html",
    "status": "Em Breve"
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
