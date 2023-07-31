
/**
 * Configuration class
 */
export class Config {
  /**
   * @return {string} The Firebase project ID
   */
  static get appLogTopic(): string {
    return 'TOPIC_APP_LOG';
    // return <string>process.env.TOPIC_FOR_APP_LOG;
  }
}
