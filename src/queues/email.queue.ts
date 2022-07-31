import { Queues } from '../enums';
import configs from '../configs';
import transport from '../email';
import BaseQueue from './base.queue';

export default class LogQueue extends BaseQueue {
  private static instance: LogQueue;
  public static getInstance(): LogQueue {
    if (!LogQueue.instance) {
      LogQueue.instance = new LogQueue();
    }
    return LogQueue.instance;
  }

  private constructor() {
    super(Queues.email);
    this.queue.process(this.process);
  }

  private async process({ data }): Promise<void> {
    console.log(data);
    await transport.sendMail({
      to: configs.mail.default.to,
      from: configs.mail.default.from,
      subject: 'E-mail especial',
      text: JSON.stringify(data),
    });
    console.log(`E-mail enviado com sucesso.`);
  }
}
