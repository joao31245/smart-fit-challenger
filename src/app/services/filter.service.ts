import { Injectable } from '@angular/core';
import { Location } from '../components/types/location-interface';

const HORARIO_PADRAO = {
  Manhã: {
    abertura: '6',
    fechamento: '12'
  },
  Tarde: {
    abertura: '12',
    fechamento: '18'
  },
  Noite: {
    abertura: '18',
    fechamento: '23'
  }
};

type HORARIO = 'Manhã' | 'Tarde' | 'Noite';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor() {}

  filtrar(results: Location[], unidadesFechadas: boolean, periodo: '') {
    let resultadosTemporarios = results;

    if (!unidadesFechadas) {
      resultadosTemporarios = results.filter(location => location.opened === true);
    }
    
    if (periodo) {
      const HORARIO_ABERTURA = HORARIO_PADRAO[periodo as HORARIO].abertura;
      const HORARIO_FECHAMENTO = HORARIO_PADRAO[periodo as HORARIO].fechamento;

      resultadosTemporarios = resultadosTemporarios.filter(location =>
        this.filterUnits(location, HORARIO_ABERTURA, HORARIO_FECHAMENTO)
      );

      return resultadosTemporarios;
    } else {
      return resultadosTemporarios;
    }
  }

  pegarDiaSemana(dia: number) {
    switch (dia) {
      case 0: {
        return 'Dom.';
      }
      case 7: {
        return 'Sab.';
      }
      default: {
        return 'Seg. à Sex.';
      }
    }
  }

  filterUnits(unit: Location, open_hour: string, close_hour: string) {
    if (!unit.schedules) return true;
  
    const open_hour_filter = parseInt(open_hour, 10);
    const close_hour_filter = parseInt(close_hour, 10);
  
    const todays_weekday = this.pegarDiaSemana(new Date().getDay());

    console.log(todays_weekday);

    for (let i = 0; i < unit.schedules.length; i++) {
      const schedule_hour = unit.schedules[i].hour;
      const schedule_weekday = unit.schedules[i].weekdays;
      
      if (todays_weekday == schedule_weekday) {
        if (schedule_hour !== 'Fechada') {
          const [unit_open_hour, unit_close_hour] = schedule_hour.split(' às ');
          const unit_open_hour_int = parseInt(unit_open_hour.replace('h', ''), 10);
          const unit_close_hour_int = parseInt(unit_close_hour.replace('h', ''), 10);
  
          if (
            unit_open_hour_int <= open_hour_filter &&
            unit_close_hour_int >= close_hour_filter
          ) {
            return true;
          }
        }
      }
    }
  
    return false;
  }  
}
