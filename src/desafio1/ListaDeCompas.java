package desafio1;

import java.util.Scanner;

public class ListaDeCompas {

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		String[] lista = new String[10];
		lista[0] = "feijao";
		lista[1] = "Arroz";
		lista[2] = "Cuscuz";

		String produto;
		int p = 999;

		boolean controle = false;
		do {
			if (!controle) {
				do {
					try {
						System.out.println("## Pressione 1 para inserir um novo produto");
						System.out.println("## Pressione 2 para sair da aplicação");
						p = Integer.parseInt(in.nextLine());
					} catch (Exception e) {
						System.out.println("Você deve digitar um número valido.");
					}

				} while (p != 1 && p != 2);

				if (p == 2) {
					System.out.println("Obrigado por utilizar nosso APP");
					controle = true;
				} else {
					System.out.println("Informe o Produto que deseja inserir na lista");
					produto = in.nextLine();

					for (int i = 0; i < lista.length; i++) {

						if (lista[i] == null) {
							if (produto == " " || produto.isEmpty() || produto.isBlank()) {
								System.out.println("Não é possivel inserir um valor Nullo");
								break;
							}
							if (produto.contains("1")) {
								System.out.println("Nao é possivel inserir um número para o nome do produto");
								break;
							}
							lista[i] = produto;
							System.out.println(produto + " Registro adicionado com Sucesso!");
							break;
						}

						if (lista[i].equals(produto)) {
							System.out.println("Esse produto já existe na posição " + i + " - Descrição do Item armazenado : " + lista[i]);
							break;
						}

					}

					System.out.println("## -- LEMBRETE");
					System.out.println("Produtos em falta");

					for (int i = 0; i < lista.length; i++) {
						if (lista[i] != null) {
							System.out.println(i + "º  :" + lista[i]);
						} else {
							break;
						}
					}
				}
			}
		} while (controle != true);
		in.close();
	}

}
