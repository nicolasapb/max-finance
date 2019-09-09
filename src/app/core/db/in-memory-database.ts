import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Payment } from 'src/app/pages/finances/payments/shared/payment.model';

export class InMemoryDatabase implements InMemoryDbService {

    createDb() {

        const payments: Payment[] = [
            { id: 1, recipient: 'MAXCASA XXVII EMP IMOB LTDA', dueDate: '12/02/2019',
              amount: '30000.00', payDate: '12/02/2019',
              payAmount: '30000.00', auth: 'MBB351FC703E985426DC491',
              account: '03500000207601', cnpj: '13070428000152', paid: true, type: '0'  } as Payment,

            { id: 2, recipient: 'NATHALIE', dueDate: '12/02/2019',
              amount: '5017.15', payDate: '12/02/2019',
              payAmount: '5017.15', auth: 'MBB35920544BE66E5643C51',
              account: '06100000144768', cnpj: '28014107000108', paid: true, type: '0'  } as Payment,

            { id: 3, recipient: 'AGILLITAS', dueDate: '21/02/2019',
              amount: '17557.10', payDate: '15/02/2019',
              payAmount: '17557.10', auth: 'MBB3525214DCA98BBBA614E',
              account: '00192836300002', cnpj: '13776742000155', paid: true, type: '0'  } as Payment,

            { id: 4, recipient: 'ABYARA', dueDate: '21/02/2019',
              amount: '7525.75', payDate: '19/02/2019',
              payAmount: '7525.75', auth: 'MBB3546C0CC9E28E173BC44',
              account: '23720031890600', cnpj: '09564811000190', paid: true, type: '0'  } as Payment,

            { id: 5, recipient: 'ABYARA', dueDate: '15/03/2019',
              amount: '1250.00', payDate: '15/03/2019',
              payAmount: '1250.00', auth: 'MBB35AEC72309BDA99EEB3',
              account: '23720031890600', cnpj: '09564811000190', paid: true, type: '1'  } as Payment,

            { id: 6, recipient: 'MAXCASA XXVII EMP IMOB LTDA', dueDate: '15/03/2019',
              amount: '1254.96', payDate: '15/03/2019',
              payAmount: '1254.96', auth: '49962346A3AE97A749DA639',
              account: '03500000207601', cnpj: '13070428000152', paid: true, type: '1'  } as Payment,

            { id: 7, recipient: 'ABYARA', dueDate: '15/04/2019',
              amount: '1150.00', payDate: '15/04/2019',
              payAmount: '1150.00', auth: 'MBB355E885E759030407153',
              account: '23720031890600', cnpj: '09564811000190', paid: true, type: '1'  } as Payment,

            { id: 8, recipient: 'MAXCASA XXVII EMP IMOB LTDA', dueDate: '15/04/2019',
              amount: '1257.41', payDate: '15/04/2019',
              payAmount: '1257.41', auth: 'MBB35C9AC05F709F2B3054B',
              account: '03500000207601', cnpj: '13070428000152', paid: true, type: '1'  } as Payment,

            { id: 9, recipient: 'ABYARA', dueDate: '15/05/2019',
              amount: '588.10', payDate: '15/05/2019',
              payAmount: '588.10', auth: 'MBB3532C881F92A2DBB1073',
              account: '23720031890600', cnpj: '09564811000190', paid: true, type: '1'  } as Payment,

            { id: 10, recipient: 'MAXCASA XXVII EMP IMOB LTDA', dueDate: '15/05/2019',
              amount: '1923.22', payDate: '15/05/2019',
              payAmount: '1923.22', auth: '72D62397A3BEF37143CAA54',
              account: '03500000207601', cnpj: '13070428000152', paid: true, type: '1'  } as Payment,

            { id: 11, recipient: 'MAXCASA XXVII EMP IMOB LTDA', dueDate: '15/06/2019',
              amount: '2531.91', payDate: '14/06/2019',
              payAmount: '2531.91', auth: '5A862247733ED8884AAA868',
              account: '03500000207601', cnpj: '13070428000152', paid: true, type: '1'  } as Payment,

            { id: 12, recipient: 'MAXCASA XXVII EMP IMOB LTDA', dueDate: '15/07/2019',
              amount: '2531.91', payDate: '15/07/2019',
              payAmount: '2531.91', auth: '99662387936EC6B149FA94A',
              account: '03500000207601', cnpj: '13070428000152', paid: true, type: '1'  } as Payment,

            { id: 13, recipient: 'MAXCASA XXVII EMP IMOB LTDA', dueDate: '15/08/2019',
              amount: '2531.91', payDate: '15/08/2019',
              payAmount: '2531.91', auth: '36E624C8933E65414ADAA1B',
              account: '03500000207601', cnpj: '13070428000152', paid: true, type: '1'  } as Payment,

            { id: 14, recipient: 'MAXCASA XXVII EMP IMOB LTDA', dueDate: '15/09/2019',
              amount: '2545.25', payDate: '13/09/2019',
              payAmount: '2545.25', auth: 'MBB350831FBD985D4FCE3F',
              account: '03500000207601', cnpj: '13070428000152', paid: false, type: '1'  } as Payment
        ];

        return {
            payments
        };
    }

    genId(collection: any[]): number {
        return collection.length > 0 ? Math.max(...collection.map(val => val.id)) + 1 : 1;
    }

}
