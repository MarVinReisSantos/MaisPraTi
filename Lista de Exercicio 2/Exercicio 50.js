// npm install prompt-sync
//node nomeArquivo.js

const prompt = require('prompt-sync')();

const programa = (()=>{
    class Hotel {
        constructor(id, nome, cidade, quartosTotais) {
            this.id = id;
            this.nome = nome;
            this.cidade = cidade;
            this.quartosTotais = quartosTotais;
            this.quartosDisponiveis = quartosTotais;
            this.reservas = [];
        }

        fazerReserva(idReserva, nomeCliente) {
            if (this.quartosDisponiveis > 0) {
                this.reservas.push({ idReserva, nomeCliente });
                this.quartosDisponiveis--;
                console.log(`Reserva realizada para ${nomeCliente} no hotel ${this.nome}`);
            } else {
                console.log(`Desculpe, não há quartos disponíveis no hotel ${this.nome}`);
            }
        }

        cancelarReserva(idReserva) {
            const reservaIndex = this.reservas.findIndex(reserva => reserva.idReserva === idReserva);
            if (reservaIndex !== -1) {
                const { nomeCliente } = this.reservas[reservaIndex];
                this.reservas.splice(reservaIndex, 1);
                this.quartosDisponiveis++;
                console.log(`Reserva cancelada para ${nomeCliente} no hotel ${this.nome}`);
            } else {
                console.log("Reserva não encontrada.");
            }
        }

        listarReservas() {
            console.log(`Reservas no hotel ${this.nome}:`);
            this.reservas.forEach(reserva => {
                console.log(`ID: ${reserva.idReserva}, Cliente: ${reserva.nomeCliente}`);
            });
        }
    }

    let hoteis = [];

    function adicionarHotel(nome, cidade, quartosTotais) {
        const id = hoteis.length + 1;
        const hotel = new Hotel(id, nome, cidade, quartosTotais);
        hoteis.push(hotel);
        console.log(`Hotel "${nome}" adicionado com sucesso.`);
    }

    function buscarHoteisPorCidade(cidade) {
        const hoteisNaCidade = hoteis.filter(hotel => hotel.cidade === cidade);
        if (hoteisNaCidade.length > 0) {
            console.log(`Hotéis disponíveis em ${cidade}:`);
            hoteisNaCidade.forEach(hotel => {
                console.log(`ID: ${hotel.id}, Nome: ${hotel.nome}, Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
            });
        } else {
            console.log(`Não há hotéis disponíveis em ${cidade}.`);
        }
    }

    function fazerReserva(idHotel, idReserva, nomeCliente) {
        const hotel = hoteis.find(hotel => hotel.id === idHotel);
        if (hotel) {
            hotel.fazerReserva(idReserva, nomeCliente);
        } else {
            console.log("Hotel não encontrado.");
        }
    }

    function cancelarReserva(idHotel, idReserva) {
        const hotel = hoteis.find(hotel => hotel.id === idHotel);
        if (hotel) {
            hotel.cancelarReserva(idReserva);
        } else {
            console.log("Hotel não encontrado.");
        }
    }

    function listarTodasAsReservas() {
        console.log("Todas as reservas:");
        hoteis.forEach(hotel => {
            hotel.listarReservas();
        });
    }

    adicionarHotel("Hotel A", "Cidade A", 10);
    adicionarHotel("Hotel B", "Cidade B", 15);
    buscarHoteisPorCidade("Cidade A");
    fazerReserva(1, 1, "Cliente 1");
    fazerReserva(1, 2, "Cliente 2");
    fazerReserva(1, 3, "Cliente 3");
    listarTodasAsReservas();
    cancelarReserva(1, 2);
    listarTodasAsReservas();

})();


