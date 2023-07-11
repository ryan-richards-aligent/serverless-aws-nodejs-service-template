import { simpleObject } from './__data__/example-data';
import { vi } from 'vitest';

beforeAll(() => {
    vi.stubEnv('YOUR_ENV_VAR', 'environment-variable');
});

afterAll(() => {
    vi.unstubAllEnvs();
});

describe('Passing tests', () => {
    test('Passing test', () => {
        expect(1).toBeTruthy();
    });

    test.skip('Skipped/Failing test', () => {
        expect(-1).toBeGreaterThan(0);
    });
});

describe('Simple object tests', () => {
    test('Object has correct name', () => {
        expect(simpleObject.name).toEqual('Test Object');
    });
});

describe('Env config tests', () => {
    test('Env config is set correctly', () => {
        expect(process.env.YOUR_ENV_VAR).toEqual('environment-variable');
    });
});
