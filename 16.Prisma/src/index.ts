import { $Enums, PrismaClient, Prisma } from '@prisma/client';

console.log('Hello, world!');
const prisma = new PrismaClient();

export const getCountries = async () => {
    const countries = await prisma.country.findMany();
    console.log(countries);
};

const selectOptions: Prisma.CountrySelect = {
    code: true,
    name: true,
    capital: true,
};

export const getCountriesByContinents = async (
    continent: $Enums.CountryContinent,
) => {
    const countries = await prisma.country.findMany({
        where: {
            continent: continent,
        },
        select: selectOptions,
    });
    console.log(countries);
};

const omitOptions: Prisma.CityOmit = {
    id: true,
    countryCode: true,
};

export const getCitiesByCountryCode = async (countryCode: string) => {
    const cities = await prisma.city.findMany({
        where: { countryCode },
        omit: omitOptions,
    });
    console.log(cities);
};

export const getCitiesFromContinentWithCountryName = async (
    continent: $Enums.CountryContinent,
) => {
    const cities = await prisma.city.findMany({
        omit: omitOptions,
        include: {
            country: {
                select: {
                    name: true,
                },
            },
        },
        where: {
            country: {
                continent,
            },
        },
    });

    console.log(cities);
};

export const getCitiesWithPopulationGreaterThan = async (limit: number) => {
    const cities = await prisma.city.findMany({
        omit: omitOptions,
        where: {
            population: {
                gt: limit,
            },
        },
    });

    console.log(cities);
};

// await getCountries();
// await getCountriesByContinents('Europe');

// await getCitiesByCountryCode('ESP');
// await getCitiesFromContinentWithCountryName('Europe');

getCitiesWithPopulationGreaterThan(9_000_000);


/************EJERCICIOS**********/
//Añadir un elemento calculado: la densidad



//Nombre de la ciudad, país y su forma de gobierno, de las ciudades de más de x habitantes de z continente


//Añadimos al anterior las lenguas oficiales del país

//Calcula la superficie y población total del mundo (hay dos maneras, o que lo calcule js o sql)

//Cuál es la superficie y la población de cada continente
