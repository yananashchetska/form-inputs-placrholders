'use strict';
const formInputs = document.querySelectorAll('input');

const findUpperCasePosition = word => {
    const index = [...word].findIndex(char => char === char.toUpperCase());
    return index !== -1 ? index : -1;
  };
  

const formatText = (placeholder) => {
    const nextWorldStart = findUpperCasePosition(placeholder);

        return nextWorldStart > 0 ? 
        placeholder.charAt(0).toUpperCase() + 
        placeholder.slice(1, nextWorldStart) + ' '
            + placeholder.slice(nextWorldStart)
            : placeholder.charAt(0).toUpperCase() + 
            placeholder.slice(1);
}

formInputs.forEach(input => {
        const parent = input.parentElement;
        const label = document.createElement('label');
        label.classList.add('field-label');
        label.id = input.id;
        label.textContent = formatText(input.name);
        input.placeholder = formatText(input.name);
        parent.append(label);
    }
)

