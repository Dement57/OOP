export class DOMHelper {
    static clearEventListener(element) {
      const clonedElement = element.cloneNode(true);
      element.replaceWith(clonedElement);
      return clonedElement;
    }
  
    static moveElement(elementId, newDestinationSelector) {
      const element = document.getElementById(elementId);
      const destinationElment = document.querySelector(newDestinationSelector);
      destinationElment.append(element);
      element.scrollIntoView({ behavior: "smooth" });
    }
  }