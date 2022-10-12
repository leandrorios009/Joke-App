import { render, screen } from '@testing-library/react';
import { JokeApp } from '../src/JokeApp';

describe('first', () => {
    
    test('should first', () => {

        render(<JokeApp />);
        screen.debug()
        
    });

});

