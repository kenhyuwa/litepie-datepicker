export const usePreviousDate = date => {
  const display = [];
  for (let i = 0; i <= date.date(0).day(); i++) {
    display.push(date.date(0).subtract(i, 'day'));
  }
  return display.sort((a, b) => a.date() - b.date());
};

export const useCurrentDate = date => {
  return Array.from(
    {
      length: date.daysInMonth()
    },
    (v, k) => date.date(k + 1)
  );
};

export const useNextDate = date => {
  const display = [];
  for (
    let i = 1;
    i <= 42 - (usePreviousDate(date).length + date.daysInMonth());
    i++
  ) {
    display.push(
      date
        .date(i)
        .month(date.month())
        .add(1, 'month')
    );
  }
  return display;
};

export const useDisableDate = (date, { disableDate }) => {
  if (typeof disableDate === 'function') {
    return disableDate(date.toDate());
  } else {
    return false;
  }
};

export const useBetweenRange = (date, { previous, next }) => {
  let pattern;
  if (previous.isAfter(next, 'date')) {
    pattern = '(]';
  } else {
    pattern = '[)';
  }
  return !!(date.isBetween(previous, next, 'date', pattern) && !date.off);
};

export const useToValueFromString = (date, { formatter }) => {
  return date.format(formatter.date);
};

export const useToValueFromArray = (
  { previous, next },
  { formatter, separator }
) => {
  return `${previous.format(formatter.date)}${separator}${next.format(
    formatter.date
  )}`;
};

export const useDirective = binding => {
  const { instance, arg, value } = binding;
  document.body.addEventListener('click', $event => {
    if ($event.target.classList.contains('litepie-datepicker-overlay')) {
      return (instance.isShow = false);
    } else {
      if (instance.LitepieDatepickerRef) {
        const { autoApply, previous, next } = instance;
        const target = $event.target.classList.contains(
          'litepie-datepicker-date'
        );
        if (target && autoApply && !previous && !next) {
          return (instance.isShow = false);
        }
        if (
          !autoApply &&
          $event.target.classList.contains(`${arg}-apply-picker`) &&
          instance.value !== ''
        ) {
          return (instance.isShow = false);
        }
        if ($event.target.classList.contains(`${arg}-cancel-picker`)) {
          return (instance.isShow = false);
        }
        if (
          $event.target.classList.contains(`litepie-shortcuts`) &&
          autoApply
        ) {
          return (instance.isShow = false);
        }

        return (instance.isShow =
          instance.LitepieDatepickerRef.contains($event.target) ||
          document.getElementById(value) === $event.target ||
          value === $event.target);
      }
      return (instance.isShow = true);
    }
  });
};

export const useVisibleViewport = el => {
  const { right } = el.getBoundingClientRect();
  const vWidth = window.innerWidth || document.documentElement.clientWidth;

  return right < vWidth;
};
