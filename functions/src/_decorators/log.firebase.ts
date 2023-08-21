import * as admin from 'firebase-admin';


/**
 * Method decorator that save data in firestore
 * @param {string} context context of the function
 * @return {Decorator} decorator
 */
export function logFire(context = 'default') {
  return function dec(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // Check of the decorated property is a function
    if (typeof descriptor.value === 'function') {
      // The function that we are going to wrap
      const declaredFn = descriptor.value;

      // Provide a new function for this property that wraps the original function
      descriptor.value = () => {
        // Call the method with `this` set the object with the method,
        // in case that matters.
        const methodResult = declaredFn.apply(target);


        const logResult = (result: any) => {
          console.log(context, result);
          admin.firestore().collection('appLog').doc().set({ context, result });
          return result;
        };

        if (methodResult.then) {
          return (methodResult as Promise<any>).then(logResult, logResult).catch(logResult);
        } else {
          logResult(methodResult);
          return methodResult;
        }
      };
    }
  };
}
