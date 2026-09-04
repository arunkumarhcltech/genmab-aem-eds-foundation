export default class HeroModel {
    constructor(data = {}) {
      this.title = data.title || '';
      this.description = data.description || '';
      this.image = data.image || '';
      this.ctaText = data.ctaText || '';
      this.ctaLink = data.ctaLink || '';
    }
  }