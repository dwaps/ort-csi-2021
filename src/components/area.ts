import './area.scss';

export class Area {
  private static id: number = 0;
  private areaId: number;
  constructor(
    private width: number,
    private height: number,
    private color: string = '#444',
  ) {
    this.areaId = ++Area.id;
  }

  render() {
    const div = document.createElement('div');

    div.id = 'area' + this.areaId;
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.background = this.color;

    document
      .querySelector('.areas')
      .appendChild(div);
  }
}
