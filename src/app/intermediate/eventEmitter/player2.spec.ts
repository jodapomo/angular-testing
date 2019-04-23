import { Player2 } from './player2';

describe('Player 2 emit',  () => {

    let player: Player2;

    beforeEach(  () => player = new Player2() );

    it( 'Emit event when it receives damage',  () => {

        let newHp = 0;

        player.hpChange.subscribe( hp => {
            newHp = hp;
        });

        player.receivesDamage(1000);

        expect( newHp ).toBe(0);

    });

    it( 'Emit event when it receives damage and survive if its less than 100',  () => {

        let newHp = 0;

        player.hpChange.subscribe( hp => {
            newHp = hp;
        });

        player.receivesDamage(50);

        expect( newHp ).toBe(50);

    });
    
});


