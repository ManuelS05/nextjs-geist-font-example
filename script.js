// Define calculators object globally
const calculators = {
    triangulo: {
        title: 'Calculadora de Triángulo',
        description: 'Calcula el perímetro o área de un triángulo.',
        template: `
            <div class="calculator-wrapper">
                <h2>Calculadora de Triángulo</h2>
                <p class="calculator-description">Calcula el perímetro o área de un triángulo.</p>
                
                <form id="calculator-form" class="calculator-form">
                    <div class="form-group">
                        <label for="calc-type">Tipo de Cálculo:</label>
                        <select id="calc-type" name="calc-type" required>
                            <option value="perimetro">Perímetro</option>
                            <option value="area">Área</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="triangle-type">Tipo de Triángulo:</label>
                        <select id="triangle-type" name="triangle-type" required>
                            <option value="equilatero">Equilátero</option>
                            <option value="isosceles">Isósceles</option>
                            <option value="escaleno">Escaleno</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="side1" id="side1-label">Lado:</label>
                        <input type="number" id="side1" name="side1" min="0" step="0.01" required 
                            placeholder="Ingrese la medida del lado">
                    </div>

                    <div class="form-group" id="side2-group" style="display:none;">
                        <label for="side2" id="side2-label">Lado:</label>
                        <input type="number" id="side2" name="side2" min="0" step="0.01" 
                            placeholder="Ingrese la medida del lado">
                    </div>

                    <div class="form-group" id="side3-group" style="display:none;">
                        <label for="side3" id="side3-label">Lado:</label>
                        <input type="number" id="side3" name="side3" min="0" step="0.01" 
                            placeholder="Ingrese la medida del lado">
                    </div>

                    <div class="form-group" id="height-group" style="display:none;">
                        <label for="height">Altura:</label>
                        <input type="number" id="height" name="height" min="0" step="0.01" 
                            placeholder="Ingrese la altura">
                    </div>

                    <div class="form-group">
                        <label for="unit">Unidad de Medida:</label>
                        <select id="unit" name="unit" required>
                            <option value="cm">Centímetros (cm)</option>
                            <option value="m">Metros (m)</option>
                            <option value="mm">Milímetros (mm)</option>
                            <option value="km">Kilómetros (km)</option>
                        </select>
                    </div>

                    <button type="submit">Calcular</button>
                </form>

                <div id="result" class="result-container" style="display: none;">
                    <h3>Resultado:</h3>
                    <p class="result-value"></p>
                </div>

                <div id="formula" class="formula-container" style="display: none;">
                    <h3>Fórmula Utilizada:</h3>
                    <pre class="formula-text"></pre>
                </div>
            </div>
        `,
        setupEvents: function() {
            const calcType = document.getElementById('calc-type');
            const triangleType = document.getElementById('triangle-type');
            const side2Group = document.getElementById('side2-group');
            const side3Group = document.getElementById('side3-group');
            const heightGroup = document.getElementById('height-group');

            function updateFields() {
                const calc = calcType.value;
                const type = triangleType.value;

                // Update label texts based on triangle type and calculation type
                const side1Label = document.getElementById('side1-label');
                const side2Label = document.getElementById('side2-label');
                const side3Label = document.getElementById('side3-label');

                if (calc === 'area') {
                    side1Label.textContent = 'Base:';
                    side2Label.textContent = '';
                    side3Label.textContent = '';
                } else {
                    if (type === 'equilatero') {
                        side1Label.textContent = 'Lado:';
                        side2Label.textContent = '';
                        side3Label.textContent = '';
                    } else if (type === 'isosceles') {
                        side1Label.textContent = 'Base:';
                        side2Label.textContent = 'Lado:';
                        side3Label.textContent = '';
                    } else {
                        side1Label.textContent = 'Lado 1:';
                        side2Label.textContent = 'Lado 2:';
                        side3Label.textContent = 'Lado 3:';
                    }
                }

                side2Group.style.display = (type === 'equilatero') ? 'none' : 'block';
                side3Group.style.display = (type === 'escaleno') ? 'block' : 'none';
                heightGroup.style.display = (calc === 'area') ? 'block' : 'none';
            }

            calcType.addEventListener('change', updateFields);
            triangleType.addEventListener('change', updateFields);
            updateFields();

            const form = document.getElementById('calculator-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                calculateTriangle();
            });
        }
    },
    cuadrado: {
        title: 'Calculadora de Cuadrado',
        description: 'Calcula el perímetro o área de un cuadrado.',
        template: `
            <div class="calculator-wrapper">
                <h2>Calculadora de Cuadrado</h2>
                <p class="calculator-description">Calcula el perímetro o área de un cuadrado.</p>
                
                <form id="calculator-form" class="calculator-form">
                    <div class="form-group">
                        <label for="calc-type">Tipo de Cálculo:</label>
                        <select id="calc-type" name="calc-type" required>
                            <option value="perimetro">Perímetro</option>
                            <option value="area">Área</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="side">Lado:</label>
                        <input type="number" id="side" name="side" min="0" step="0.01" required 
                            placeholder="Ingrese la medida del lado">
                    </div>

                    <div class="form-group">
                        <label for="unit">Unidad de Medida:</label>
                        <select id="unit" name="unit" required>
                            <option value="cm">Centímetros (cm)</option>
                            <option value="m">Metros (m)</option>
                            <option value="mm">Milímetros (mm)</option>
                            <option value="km">Kilómetros (km)</option>
                        </select>
                    </div>

                    <button type="submit">Calcular</button>
                </form>

                <div id="result" class="result-container" style="display: none;">
                    <h3>Resultado:</h3>
                    <p class="result-value"></p>
                </div>

                <div id="formula" class="formula-container" style="display: none;">
                    <h3>Fórmula Utilizada:</h3>
                    <pre class="formula-text"></pre>
                </div>
            </div>
        `
    },
    circulo: {
        title: 'Calculadora de Círculo',
        description: 'Calcula el perímetro o área de un círculo.',
        template: `
            <div class="calculator-wrapper">
                <h2>Calculadora de Círculo</h2>
                <p class="calculator-description">Calcula el perímetro o área de un círculo.</p>
                
                <form id="calculator-form" class="calculator-form">
                    <div class="form-group">
                        <label for="calc-type">Tipo de Cálculo:</label>
                        <select id="calc-type" name="calc-type" required>
                            <option value="perimetro">Perímetro</option>
                            <option value="area">Área</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="radius">Radio:</label>
                        <input type="number" id="radius" name="radius" min="0" step="0.01" required 
                            placeholder="Ingrese el radio">
                    </div>

                    <div class="form-group">
                        <label for="unit">Unidad de Medida:</label>
                        <select id="unit" name="unit" required>
                            <option value="cm">Centímetros (cm)</option>
                            <option value="m">Metros (m)</option>
                            <option value="mm">Milímetros (mm)</option>
                            <option value="km">Kilómetros (km)</option>
                        </select>
                    </div>

                    <button type="submit">Calcular</button>
                </form>

                <div id="result" class="result-container" style="display: none;">
                    <h3>Resultado:</h3>
                    <p class="result-value"></p>
                </div>

                <div id="formula" class="formula-container" style="display: none;">
                    <h3>Fórmula Utilizada:</h3>
                    <pre class="formula-text"></pre>
                </div>
            </div>
        `
    },
    esfera: {
        title: 'Calculadora de Esfera',
        description: 'Calcula el volumen y área superficial de una esfera.',
        template: `
            <div class="calculator-wrapper">
                <h2>Calculadora de Esfera</h2>
                <p class="calculator-description">Calcula el volumen y área superficial de una esfera.</p>
                
                <form id="calculator-form" class="calculator-form">
                    <div class="form-group">
                        <label for="calc-type">Tipo de Cálculo:</label>
                        <select id="calc-type" name="calc-type" required>
                            <option value="volumen">Volumen</option>
                            <option value="superficie">Área Superficial</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="radius">Radio:</label>
                        <input type="number" id="radius" name="radius" min="0" step="0.01" required 
                            placeholder="Ingrese el radio">
                    </div>

                    <div class="form-group">
                        <label for="unit">Unidad de Medida:</label>
                        <select id="unit" name="unit" required>
                            <option value="cm">Centímetros (cm)</option>
                            <option value="m">Metros (m)</option>
                            <option value="mm">Milímetros (mm)</option>
                            <option value="km">Kilómetros (km)</option>
                        </select>
                    </div>

                    <button type="submit">Calcular</button>
                </form>

                <div id="result" class="result-container" style="display: none;">
                    <h3>Resultado:</h3>
                    <p class="result-value"></p>
                </div>

                <div id="formula" class="formula-container" style="display: none;">
                    <h3>Fórmula Utilizada:</h3>
                    <pre class="formula-text"></pre>
                </div>
            </div>
        `
    },
    cilindro: {
        title: 'Calculadora de Cilindro',
        description: 'Calcula el volumen y área superficial de un cilindro.',
        template: `
            <div class="calculator-wrapper">
                <h2>Calculadora de Cilindro</h2>
                <p class="calculator-description">Calcula el volumen y área superficial de un cilindro.</p>
                
                <form id="calculator-form" class="calculator-form">
                    <div class="form-group">
                        <label for="calc-type">Tipo de Cálculo:</label>
                        <select id="calc-type" name="calc-type" required>
                            <option value="volumen">Volumen</option>
                            <option value="superficie">Área Superficial</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="radius">Radio:</label>
                        <input type="number" id="radius" name="radius" min="0" step="0.01" required 
                            placeholder="Ingrese el radio">
                    </div>

                    <div class="form-group">
                        <label for="height">Altura:</label>
                        <input type="number" id="height" name="height" min="0" step="0.01" required 
                            placeholder="Ingrese la altura">
                    </div>

                    <div class="form-group">
                        <label for="unit">Unidad de Medida:</label>
                        <select id="unit" name="unit" required>
                            <option value="cm">Centímetros (cm)</option>
                            <option value="m">Metros (m)</option>
                            <option value="mm">Milímetros (mm)</option>
                            <option value="km">Kilómetros (km)</option>
                        </select>
                    </div>

                    <button type="submit">Calcular</button>
                </form>

                <div id="result" class="result-container" style="display: none;">
                    <h3>Resultado:</h3>
                    <p class="result-value"></p>
                </div>

                <div id="formula" class="formula-container" style="display: none;">
                    <h3>Fórmula Utilizada:</h3>
                    <pre class="formula-text"></pre>
                </div>
            </div>
        `
    },
    cubo: {
        title: 'Calculadora de Cubo',
        description: 'Calcula el volumen y área superficial de un cubo.',
        template: `
            <div class="calculator-wrapper">
                <h2>Calculadora de Cubo</h2>
                <p class="calculator-description">Calcula el volumen y área superficial de un cubo.</p>
                
                <form id="calculator-form" class="calculator-form">
                    <div class="form-group">
                        <label for="calc-type">Tipo de Cálculo:</label>
                        <select id="calc-type" name="calc-type" required>
                            <option value="volumen">Volumen</option>
                            <option value="superficie">Área Superficial</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="side">Lado:</label>
                        <input type="number" id="side" name="side" min="0" step="0.01" required 
                            placeholder="Ingrese la medida del lado">
                    </div>

                    <div class="form-group">
                        <label for="unit">Unidad de Medida:</label>
                        <select id="unit" name="unit" required>
                            <option value="cm">Centímetros (cm)</option>
                            <option value="m">Metros (m)</option>
                            <option value="mm">Milímetros (mm)</option>
                            <option value="km">Kilómetros (km)</option>
                        </select>
                    </div>

                    <button type="submit">Calcular</button>
                </form>

                <div id="result" class="result-container" style="display: none;">
                    <h3>Resultado:</h3>
                    <p class="result-value"></p>
                </div>

                <div id="formula" class="formula-container" style="display: none;">
                    <h3>Fórmula Utilizada:</h3>
                    <pre class="formula-text"></pre>
                </div>
            </div>
        `
    },
    piramide: {
        title: 'Calculadora de Pirámide',
        description: 'Calcula el volumen y área superficial de una pirámide.',
        template: `
            <div class="calculator-wrapper">
                <h2>Calculadora de Pirámide</h2>
                <p class="calculator-description">Calcula el volumen y área superficial de una pirámide.</p>
                
                <form id="calculator-form" class="calculator-form">
                    <div class="form-group">
                        <label for="calc-type">Tipo de Cálculo:</label>
                        <select id="calc-type" name="calc-type" required>
                            <option value="volumen">Volumen</option>
                            <option value="superficie">Área Superficial</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="base-side">Lado de la Base:</label>
                        <input type="number" id="base-side" name="base-side" min="0" step="0.01" required 
                            placeholder="Ingrese el lado de la base">
                    </div>

                    <div class="form-group">
                        <label for="height">Altura:</label>
                        <input type="number" id="height" name="height" min="0" step="0.01" required 
                            placeholder="Ingrese la altura">
                    </div>

                    <div class="form-group">
                        <label for="unit">Unidad de Medida:</label>
                        <select id="unit" name="unit" required>
                            <option value="cm">Centímetros (cm)</option>
                            <option value="m">Metros (m)</option>
                            <option value="mm">Milímetros (mm)</option>
                            <option value="km">Kilómetros (km)</option>
                        </select>
                    </div>

                    <button type="submit">Calcular</button>
                </form>

                <div id="result" class="result-container" style="display: none;">
                    <h3>Resultado:</h3>
                    <p class="result-value"></p>
                </div>

                <div id="formula" class="formula-container" style="display: none;">
                    <h3>Fórmula Utilizada:</h3>
                    <pre class="formula-text"></pre>
                </div>
            </div>
        `
    },
    rombo: {
        title: 'Calculadora de Rombo',
        description: 'Calcula el perímetro o área de un rombo.',
        template: `
            <div class="calculator-wrapper">
                <h2>Calculadora de Rombo</h2>
                <p class="calculator-description">Calcula el perímetro o área de un rombo.</p>
                
                <form id="calculator-form" class="calculator-form">
                    <div class="form-group">
                        <label for="calc-type">Tipo de Cálculo:</label>
                        <select id="calc-type" name="calc-type" required>
                            <option value="perimetro">Perímetro</option>
                            <option value="area">Área</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="side">Lado:</label>
                        <input type="number" id="side" name="side" min="0" step="0.01" required 
                            placeholder="Ingrese la medida del lado">
                    </div>

                    <div class="form-group" id="diagonals-group">
                        <label for="diagonal1">Diagonal Mayor:</label>
                        <input type="number" id="diagonal1" name="diagonal1" min="0" step="0.01" required 
                            placeholder="Ingrese la diagonal mayor">
                        
                        <label for="diagonal2">Diagonal Menor:</label>
                        <input type="number" id="diagonal2" name="diagonal2" min="0" step="0.01" required 
                            placeholder="Ingrese la diagonal menor">
                    </div>

                    <div class="form-group">
                        <label for="unit">Unidad de Medida:</label>
                        <select id="unit" name="unit" required>
                            <option value="cm">Centímetros (cm)</option>
                            <option value="m">Metros (m)</option>
                            <option value="mm">Milímetros (mm)</option>
                            <option value="km">Kilómetros (km)</option>
                        </select>
                    </div>

                    <button type="submit">Calcular</button>
                </form>

                <div id="result" class="result-container" style="display: none;">
                    <h3>Resultado:</h3>
                    <p class="result-value"></p>
                </div>

                <div id="formula" class="formula-container" style="display: none;">
                    <h3>Fórmula Utilizada:</h3>
                    <pre class="formula-text"></pre>
                </div>
            </div>
        `
    }
};

// Global calculation functions
function calculateTriangle() {
    console.log('calculateTriangle called');
    const calcType = document.getElementById('calc-type').value;
    const triangleType = document.getElementById('triangle-type').value;
    const unit = document.getElementById('unit').value;
    const side1 = parseFloat(document.getElementById('side1').value);
    let result, formula;

    if (calcType === 'perimetro') {
        if (triangleType === 'equilatero') {
            result = side1 * 3;
            formula = `Perímetro = 3 × lado\nP = 3 × ${side1} ${unit}\nP = ${result} ${unit}`;
        } else if (triangleType === 'isosceles') {
            const side2 = parseFloat(document.getElementById('side2').value);
            result = (2 * side2) + side1;
            formula = `Perímetro = 2 × lado + base\nP = (2 × ${side2}) + ${side1} ${unit}\nP = ${result} ${unit}`;
        } else {
            const side2 = parseFloat(document.getElementById('side2').value);
            const side3 = parseFloat(document.getElementById('side3').value);
            result = side1 + side2 + side3;
            formula = `Perímetro = lado1 + lado2 + lado3\nP = ${side1} + ${side2} + ${side3} ${unit}\nP = ${result} ${unit}`;
        }
    } else {
        const height = parseFloat(document.getElementById('height').value);
        result = (side1 * height) / 2;
        formula = `Área = (base × altura) / 2\nA = (${side1} × ${height}) / 2\nA = ${result} ${unit}²`;
    }

    displayResult(result, calcType, unit, formula);
}

function calculateSquare(calcType, unit) {
    const side = parseFloat(document.getElementById('side').value);
    let result, formula;

    if (calcType === 'perimetro') {
        result = side * 4;
        formula = `Perímetro = 4 × lado\nP = 4 × ${side} ${unit}\nP = ${result} ${unit}`;
    } else {
        result = side * side;
        formula = `Área = lado × lado\nA = ${side} × ${side}\nA = ${result} ${unit}²`;
    }

    displayResult(result, calcType, unit, formula);
}

function calculateCircle(calcType, unit) {
    const radius = parseFloat(document.getElementById('radius').value);
    const pi = Math.PI;
    let result, formula;

    if (calcType === 'perimetro') {
        result = 2 * pi * radius;
        formula = `Perímetro = 2 × π × radio\nP = 2 × ${pi.toFixed(4)} × ${radius}\nP = ${result.toFixed(2)} ${unit}`;
    } else {
        result = pi * radius * radius;
        formula = `Área = π × radio²\nA = ${pi.toFixed(4)} × ${radius}²\nA = ${result.toFixed(2)} ${unit}²`;
    }

    displayResult(result, calcType, unit, formula);
}

function calculateSphere(calcType, unit) {
    const radius = parseFloat(document.getElementById('radius').value);
    const pi = Math.PI;
    let result, formula;

    if (calcType === 'volumen') {
        result = (4 / 3) * pi * Math.pow(radius, 3);
        formula = `Volumen = (4/3) × π × radio³\nV = (4/3) × ${pi.toFixed(4)} × ${radius}³\nV = ${result.toFixed(2)} ${unit}³`;
    } else {
        result = 4 * pi * Math.pow(radius, 2);
        formula = `Área Superficial = 4 × π × radio²\nAS = 4 × ${pi.toFixed(4)} × ${radius}²\nAS = ${result.toFixed(2)} ${unit}²`;
    }

    displayResult(result, calcType, unit, formula);
}

function calculateCylinder(calcType, unit) {
    const radius = parseFloat(document.getElementById('radius').value);
    const height = parseFloat(document.getElementById('height').value);
    const pi = Math.PI;
    let result, formula;

    if (calcType === 'volumen') {
        result = pi * radius * radius * height;
        formula = `Volumen = π × radio² × altura\nV = ${pi.toFixed(4)} × ${radius}² × ${height}\nV = ${result.toFixed(2)} ${unit}³`;
    } else {
        const lateralArea = 2 * pi * radius * height;
        const baseArea = pi * radius * radius;
        result = lateralArea + (2 * baseArea);
        formula = `Área Superficial = 2πrh + 2πr²\nAS = (2 × ${pi.toFixed(4)} × ${radius} × ${height}) + (2 × ${pi.toFixed(4)} × ${radius}²)\nAS = ${result.toFixed(2)} ${unit}²`;
    }

    displayResult(result, calcType, unit, formula);
}

function calculateCube(calcType, unit) {
    const side = parseFloat(document.getElementById('side').value);
    let result, formula;

    if (calcType === 'volumen') {
        result = Math.pow(side, 3);
        formula = `Volumen = lado³\nV = ${side}³\nV = ${result} ${unit}³`;
    } else {
        result = 6 * Math.pow(side, 2);
        formula = `Área Superficial = 6 × lado²\nAS = 6 × ${side}²\nAS = ${result} ${unit}²`;
    }

    displayResult(result, calcType, unit, formula);
}

function calculatePyramid(calcType, unit) {
    const baseSide = parseFloat(document.getElementById('base-side').value);
    const height = parseFloat(document.getElementById('height').value);
    let result, formula;

    if (calcType === 'volumen') {
        result = (Math.pow(baseSide, 2) * height) / 3;
        formula = `Volumen = (lado_base² × altura) / 3\nV = (${baseSide}² × ${height}) / 3\nV = ${result.toFixed(2)} ${unit}³`;
    } else {
        const baseArea = Math.pow(baseSide, 2);
        const slantHeight = Math.sqrt(Math.pow(height, 2) + Math.pow(baseSide/2, 2));
        const lateralArea = 2 * baseSide * slantHeight;
        result = baseArea + lateralArea;
        formula = `Área Superficial = lado_base² + (2 × lado_base × altura_lateral)\nAS = ${baseSide}² + (2 × ${baseSide} × ${slantHeight.toFixed(2)})\nAS = ${result.toFixed(2)} ${unit}²`;
    }

    displayResult(result, calcType, unit, formula);
}

function calculateRhombus(calcType, unit) {
    const side = parseFloat(document.getElementById('side').value);
    let result, formula;

    if (calcType === 'perimetro') {
        result = side * 4;
        formula = `Perímetro = 4 × lado\nP = 4 × ${side} ${unit}\nP = ${result} ${unit}`;
    } else {
        const d1 = parseFloat(document.getElementById('diagonal1').value);
        const d2 = parseFloat(document.getElementById('diagonal2').value);
        result = (d1 * d2) / 2;
        formula = `Área = (D × d) / 2\nA = (${d1} × ${d2}) / 2\nA = ${result} ${unit}²`;
    }

    displayResult(result, calcType, unit, formula);
}

function displayResult(value, type, unit, formula) {
    console.log('displayResult called with:', { value, type, unit, formula });
    const resultContainer = document.getElementById('result');
    const formulaContainer = document.getElementById('formula');
    let suffix = '';

    switch(type) {
        case 'perimetro':
            suffix = unit;
            break;
        case 'area':
        case 'superficie':
            suffix = unit + '²';
            break;
        case 'volumen':
            suffix = unit + '³';
            break;
    }

    // Update result
    resultContainer.querySelector('.result-value').textContent = 
        `${type.charAt(0).toUpperCase() + type.slice(1)}: ${value.toFixed(2)} ${suffix}`;
    
    // Update formula
    formulaContainer.querySelector('.formula-text').textContent = formula;

    // Show containers with animation
    resultContainer.style.display = 'block';
    formulaContainer.style.display = 'block';

    // Scroll to results
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const menuSection = document.querySelector('.menu-section');
    const calculatorSection = document.querySelector('.calculator-section');
    const calculatorContent = document.getElementById('calculator-content');
    const backButton = document.querySelector('.back-button');
    const cards = document.querySelectorAll('.card');

    // Event Listeners
    backButton.addEventListener('click', () => {
        calculatorSection.style.display = 'none';
        menuSection.style.display = 'block';
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            menuSection.style.display = 'none';
            calculatorSection.style.display = 'block';
            loadCalculator(card.dataset.shape);
        });
    });

    function loadCalculator(shape) {
        const calculator = calculators[shape];
        if (calculator) {
            calculatorContent.innerHTML = calculator.template;
            setupCalculatorEvents(shape);
        } else {
            calculatorContent.innerHTML = `
                <div class="calculator-wrapper">
                    <h2>Calculadora en Construcción</h2>
                    <p class="calculator-description">Esta calculadora estará disponible próximamente.</p>
                </div>
            `;
        }
    }

    function setupCalculatorEvents(shape) {
        const calculator = calculators[shape];
        if (!calculator) return;

        if (calculator.setupEvents) {
            calculator.setupEvents();
        } else {
            const form = document.getElementById('calculator-form');
            if (!form) return;

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const calcType = document.getElementById('calc-type').value;
                const unit = document.getElementById('unit').value;
                
                switch(shape) {
                    case 'cuadrado':
                        calculateSquare(calcType, unit);
                        break;
                    case 'circulo':
                        calculateCircle(calcType, unit);
                        break;
                    case 'esfera':
                        calculateSphere(calcType, unit);
                        break;
                    case 'cilindro':
                        calculateCylinder(calcType, unit);
                        break;
                    case 'cubo':
                        calculateCube(calcType, unit);
                        break;
                    case 'piramide':
                        calculatePyramid(calcType, unit);
                        break;
                    case 'rombo':
                        calculateRhombus(calcType, unit);
                        break;
                }
            });
        }
    }
});
