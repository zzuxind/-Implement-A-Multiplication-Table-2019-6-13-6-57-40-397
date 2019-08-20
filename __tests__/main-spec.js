const {creatMultiplyTable,isOnetoThousand,isValid} = require('../main');

it('should create MultiplyTable',()=>{
    const firstNumber=2;
    const secondNumber=3;
    const result=creatMultiplyTable(firstNumber,secondNumber);
    expect(result).toBe("2*2=4\n2*3=6 3*3=9");
});

it('should print true if between 1 to 1000',()=>{
    const Number=2;
    const result=isOnetoThousand(Number);
    expect(result).toBe(true);
})

it('should print true if valid',()=>{
    const firstNumber=2;
    const secondNumber=3;
    expect(isValid(firstNumber,secondNumber)).toBe(true);
})
