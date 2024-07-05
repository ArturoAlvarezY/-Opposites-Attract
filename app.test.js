import { describe, it, expect } from "vitest";
import { theresLove } from "./app.js";

describe('theresLove', () => {

    it('if timmy counts 1 petal and Sarah 4, return true', () => {
        
        const timmysPetal= 1;
        const sarahsPetal= 4;
        const result= theresLove(timmysPetal, sarahsPetal)

        expect(result).toBe(true);
        expect(result).toBeTypeOf("boolean");
    });

   


})