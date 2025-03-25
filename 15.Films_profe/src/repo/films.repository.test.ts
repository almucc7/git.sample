import { FilmRepo } from "./films.repository";

describe('Given class FilmRepo', () => {
    describe('When we instanciate it', () =>{
        test('Then it should be defined', () => {
            //Arrange
            //Act
            const filmRepo = new FilmRepo();
            //Assert
            expect(filmRepo).toBeDefined();

        });
    });

    //describe('When read is called', () => {});
});