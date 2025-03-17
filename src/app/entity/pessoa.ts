export class Pessoa {

  nmPessoa?: string;
  nrCpf?: string;

  getCpf(): string {
    if (this.nrCpf) {
      return this.nrCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
    }
    return '';
  }

  setCpf(cpf: string): void {
    this.nrCpf = cpf.replace(/\D/g, '');
  }

  getNmPessoa(): string {
    return this.nmPessoa || '';
  }

  setNmPessoa(nmPessoa: string): void {
    this.nmPessoa = nmPessoa;
  }

}
