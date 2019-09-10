import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Payment } from 'src/app/pages/finances/payments/shared/payment.model';
import { Saving } from 'src/app/pages/finances/savings/shared/saving.model';
import { Simulation } from 'src/app/pages/finances/simulations/shared/simulation.model';

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

        const savings: Saving[] = [
          {id: 1,  type: 'PP', amount: '5208.54', date: '01/01/2019', simulation: false } as Saving,
          {id: 2,  type: 'PP', amount: '4000.00', date: '01/02/2019', simulation: false } as Saving,
          {id: 3,  type: 'PP', amount: '2800.00', date: '01/03/2019', simulation: false } as Saving,
          {id: 4,  type: 'PP', amount: '200.00', date: '01/04/2019', simulation: false } as Saving,
          {id: 5,  type: 'PP', amount: '2000.00', date: '01/04/2019', simulation: false } as Saving,
          {id: 6,  type: 'PP', amount: '14.92', date: '01/04/2019', simulation: false } as Saving,
          {id: 7,  type: 'PP', amount: '-300.00', date: '01/04/2019', simulation: false } as Saving,
          {id: 8,  type: 'PP', amount: '30.44', date: '01/05/2019', simulation: false } as Saving,
          {id: 9,  type: 'PP', amount: '14.97', date: '01/05/2019', simulation: false } as Saving,
          {id: 10, type: 'PP', amount: '2300.00', date: '01/05/2019', simulation: false } as Saving,
          {id: 11, type: 'PP', amount: '16.76', date: '01/05/2019', simulation: false } as Saving,
          {id: 12, type: 'PP', amount: '10.11', date: '01/05/2019', simulation: false } as Saving,
          {id: 13, type: 'PP', amount: '4700.00', date: '01/06/2019', simulation: false } as Saving,
          {id: 14, type: 'PP', amount: '15.03', date: '01/06/2019', simulation: false } as Saving,
          {id: 15, type: 'PP', amount: '25.33', date: '01/06/2019', simulation: false } as Saving,
          {id: 16, type: 'PP', amount: '2300.00', date: '01/06/2019', simulation: false } as Saving,
          {id: 17, type: 'PP', amount: '20.19', date: '01/07/2019', simulation: false } as Saving,
          {id: 18, type: 'PP', amount: '10000.00', date: '01/07/2019', simulation: false } as Saving,
          {id: 19, type: 'PP', amount: '57.96', date: '01/07/2019', simulation: false } as Saving,
          {id: 20, type: 'PP', amount: '1585.75', date: '01/07/2019', simulation: false } as Saving,
          {id: 21, type: 'CAR', amount: '50000', date: '15/08/2019', simulation: false } as Saving,
          {id: 22, type: 'CAR', amount: '50000', date: '01/01/2020', simulation: true } as Saving,
          {id: 23, type: 'FGTS', amount: '55180.34', date: '01/08/2019', simulation: false} as Saving,
          {id: 24, type: 'FGTS', amount: '60000.00', date: '01/01/2020', simulation: true} as Saving,
          {id: 25, type: 'CDB', amount: '35811.54', date: '01/08/2019', simulation: false} as Saving,
          {id: 26, type: 'CDB', amount: '36000.00', date: '01/01/2020', simulation: true} as Saving,
          {id: 27, type: 'TES', amount: '25461.10', date: '01/08/2019', simulation: false} as Saving,
          {id: 28, type: 'TES', amount: '25500.00', date: '01/01/2020', simulation: true} as Saving,
          {id: 29, type: 'PREV', amount: '9300.42', date: '01/01/2020', simulation: true} as Saving,
          {id: 30, type: 'PREV', amount: '9300.42', date: '01/01/2019', simulation: false} as Saving,
          {id: 31, type: 'PP', amount: '20888.58', date: '01/01/2020', simulation: true} as Saving,
          {id: 32, type: 'PPR', amount: '0', date: '20/12/2019', simulation: false} as Saving,
          {id: 33, type: 'PPR', amount: '16000.00', date: '01/01/2020', simulation: true} as Saving
        ];

        const simulations: Simulation[] = [
          {
            id: 1,
            composition: 'FULL',
            total: '217689.00',
            entry: '335689.00',
            entryPct: '65.7700',
            funding: '174692.00',
            fundingPct: '34.2300',
            renovation: '0',
            installment: '1679.74',
            fundFees: false,
            composeIncome: true,
            interest: '7.9900',
            interestAM: '0.6400',
            cet: '8.6000',
            cesh: '2.4584',
            term: '35',
            simDate: '09/07/2019'
          } as Simulation
        ];

        return {
            payments,
            savings,
            simulations
        };
    }

    genId(collection: any[]): number {
        return collection.length > 0 ? Math.max(...collection.map(val => val.id)) + 1 : 1;
    }

}
