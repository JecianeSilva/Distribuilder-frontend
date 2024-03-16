import * as Blockly from 'blockly';

class CustomCategory extends Blockly.ToolboxCategory {
  /**
   * Constructor for a custom category.
   * @override
   */
  constructor(categoryDef, toolbox, opt_parent) {
    super(categoryDef, toolbox, opt_parent);
  }

  /**
   * Adds the colour to the toolbox.
   * This is called on category creation and whenever the theme changes.
   * @override
   */
  addColourBorder_(colour) {
    this.rowDiv_.style.backgroundColor = colour;
  }

  /**
   * Creates the dom used for the icon.
   * @returns {HTMLElement} The element for the icon.
   * @override
   */
  createIconDom_() {
    const iconImg = document.createElement('img');
    iconImg.src = '../../../src/assets/icons/square.svg';
    iconImg.alt = 'Blockly Logo';
    return iconImg;
  }
}

Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  Blockly.ToolboxCategory.registrationName,
  CustomCategory,
  true,
);