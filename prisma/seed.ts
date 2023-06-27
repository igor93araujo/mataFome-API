import { PrismaClient } from '@prisma/client';
import SalesCreateManyInput from '../src/types/SalesCreateManyInput';

const prisma = new PrismaClient();

const Drinks = [
    {
      name: 'Refri Lata',
      image: 'https://cdn.pixabay.com/photo/2017/09/12/04/42/soft-drink-2741251_960_720.jpg',
      price: 6,
    },
    {
      name: 'Suco Lata',
      image: 'https://cdn.pixabay.com/photo/2013/02/28/22/03/beverage-cans-86982_960_720.jpg',
      price: 5,
    },
    {
      name: 'Água Mineral',
      image: 'https://cdn.pixabay.com/photo/2017/02/02/15/15/bottle-2032980_960_720.jpg',
      price: 3,
    },
    {
      name: 'Cerveja Lata',
      image: 'https://cdn.pixabay.com/photo/2014/11/10/22/46/cans-526011_960_720.jpg',
      price: 7,
    },
  ];
  
  const Sandwiches = [
    {
      name: 'Tradicional',
      id: 1,
      ingredients: 'Pão, hambúrguer bovino, alface, tomate, queijo prato.',
      image: 'https://img.freepik.com/fotos-gratis/saboroso-hamburguer-de-carne-com-queijo-e-salada-de-frente-no-fundo-escuro_140725-89597.jpg',
      price: 15,
    },
    {
      name: 'Tradicional duplo',
      id: 2,
      ingredients: 'Pão, 2 hambúrgueres bovinos, alface, tomate,  dobro de queijo prato.',
      image: 'https://img.freepik.com/fotos-gratis/hamburguer-de-carne-com-salada-de-queijo-e-tomate-em-piso-escuro_140725-89524.jpg?w=2000',
      price: 20,
    },
    {
      name: 'X-bacon',
      id: 3,
      ingredients: 'Pão, hambúrguer bovino, alface, tomate, bacon, cebola, picles.',
      image: 'https://static.vecteezy.com/ti/fotos-gratis/p1/1987029-hamburguer-carregado-em-um-prato-gratis-foto.jpg',
      price: 25,
    },
    {
      name: 'Duplo frango',
      id: 4,
      ingredients: 'Pão, hambúrguer de frango, alface, tomate, queijo prato, anéis de cebola.',
      image: 'https://static.vecteezy.com/ti/fotos-gratis/p1/723418-hamburguer-foto.jpg',
      price: 25,
    },
    {
      name: 'Destruidor',
      id: 5,
      ingredients: 'Pão, 2 hambúrgueres bovinos, duplo alface, duplo tomate, queijo prato, queijo mussarela.',
      image: 'https://static.vecteezy.com/ti/fotos-gratis/p1/1980129-close-up-de-um-hamburguer-gratis-foto.jpg',
      price: 20,
    }
  ]

  const Pizzas = [
    {
      name: 'Calabresa',
      ingredients: 'Massa fina, calabresa, tomate cereja, picles, mussarela, especiarias',
      image: 'https://img.freepik.com/fotos-premium/pizza-com-linguica-defumada-tomate-cereja-seco-pimenta-jalapeno-e-mussarela-fundo-vermelho-vista-superior-espaco-para-copia_357114-652.jpg',
      price: 30,
    },
    {
      name: '4 queijos',
      ingredients: 'Massa fina, queijo mussarela, quejo prato, queijo parmesão,  queijo provolone, especiarias',
      image: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo-na-mesa-de-madeira-redonda-marrom-e-superficie-escura_140725-14476.jpg?w=1380&t=st=1672849375~exp=1672849975~hmac=ef7666d660b583ccaf62882f9fbe4ec17e88433ff6aaa863ccadb3a454653826',
      price: 35,
    },
    {
      name: 'Portuguesa',
      ingredients: 'Massa fina, calabresa, tomate, azeitona preta, pimentão, cebola, ovo cozidos e especiarias',
      image: 'https://img.freepik.com/fotos-gratis/pizza-pizza-cheia-de-tomates-salame-e-azeitonas_140725-1200.jpg?w=900&t=st=1672849573~exp=1672850173~hmac=4d358056d799c31bbaa893fac35ebd3e95d07b6a01d7716a569295e63d10958d',
      price: 40,
    },
    {
      name: 'Marguerita',
      ingredients: 'Massa fina, queijo mussarela, oregano, cebola, especiarias',
      image: 'https://i0.wp.com/anamariabraga.globo.com/wp-content/uploads/2020/08/pizza-margherita.jpg?fit=1200%2C675&ssl=1',
      price: 35,
    },
    {
      name: 'Brigadeiro',
      ingredients: 'Massa fina, chocolate e granulado',
      image: 'https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2008/07/Pizza_brigadeoraaa.jpg',
      price: 25,
    }
  ]
  

async function main() {

    const productsData = Drinks.map((drink) => ({
        name: drink.name,
        price: drink.price,
        categoryId: 1, // Defina o ID da categoria apropriada aqui
        description: null,
        image: drink.image,
        status: true,
      }));

      const pizzaProducts = Pizzas.map((pizza) => ({
        name: pizza.name,
        price: pizza.price,
        categoryId: 2, // Defina o ID da categoria apropriada para pizzas
        description: pizza.ingredients,
        image: pizza.image,
        status: true,
      }));

      const sandwichProducts = Sandwiches.map((sandwich) => ({
        name: sandwich.name,
        price: sandwich.price,
        categoryId: 3, // Defina o ID da categoria apropriada para sanduíches
        description: sandwich.ingredients,
        image: sandwich.image,
        status: true,
      }));

  await prisma.client.createMany({
    data: [
      {
        email: 'cliente1@example.com',
        name: 'Cliente 1',
        phone: '123456789',
        address: 'Endereço 1',
        cpf: '11111111111',
      },
      {
        email: 'cliente2@example.com',
        name: 'Cliente 2',
        phone: '987654321',
        address: 'Endereço 2',
        cpf: '22222222222',
      },
      // Adicionar mais clientes aqui...
    ],
  });

  // Criar categorias
  await prisma.category.createMany({
    data: [
      { type: 'Drink' },
      { type: 'Pizza' },
        { type: 'Hamburguer' },
      // Adicionar mais categorias aqui...
    ],
  });

  // Criar produtos
  await prisma.product.createMany({
    data: productsData,
  });

  await prisma.product.createMany({
    data: sandwichProducts,
  });

  await prisma.product.createMany({
    data: pizzaProducts,
  });

  // Criar vendas
  await prisma.sales.createMany({
    data: [
      {
        clientId: 1,
        productId: 1,
        total: 9.99,
      },
      {
        clientId: 2,
        productId: 2,
        total: 19.99,
      },
      // Adicionar mais vendas aqui...
    ] as SalesCreateManyInput[],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
