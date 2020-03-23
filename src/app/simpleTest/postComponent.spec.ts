import { postComponent } from "./postComponent"

describe('Post Component', () => { 
    let component:postComponent;
    //setup and tear down
    //will run once
    beforeAll(() => {

    })

    afterAll(() => {
        component=null;
    })

    //will run on each test
    beforeEach(() => {
        //Arrange component
        component = new postComponent();
        //Initialize total likes withing spec
        component.totalLikes = 3;
    })

    afterEach(() => {

    })



    it('Should increase likes', () => {
        //Act
        component.like();
        //Assert
        expect(component.totalLikes).toBe(4);


    })

    it('Should decrease likes', () => {
        //Act
        component.dislike();
        //Assert
        expect(component.totalLikes).toBe(2)
    })
})