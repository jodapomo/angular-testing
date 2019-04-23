import { Player } from './classes';

describe( 'Classes tests',  () => {

    let player = new Player();

    beforeEach( () => {
        player = new Player;
    });

    it( 'should return 80 hp if receives 20 of damage',  () => {

        // const player = new Player();
        const res = player.receivesDamage(20);

        expect( res ).toBe(80);

    });

    it( 'should return 80 hp if receives 50 of damage',  () => {

        // const player = new Player();
        const res = player.receivesDamage(50);

        expect( res ).toBe(50);

    });

    it( 'should return 0 hp if it receives more than 100 damage',  () => {

        // const player = new Player();
        const res = player.receivesDamage(101);

        expect( res ).toBe(0);

    });
});

