package com.milhas.convertendobeneficios.Model;

import java.text.DecimalFormat;

import com.milhas.convertendobeneficios.Domain.Dominio;


public class Conversor extends Dominio {

	private double dolar = 1;
	private double vlIntercambio;
	
	
	public static DecimalFormat df = new DecimalFormat("0.00");
	
	public Conversor( double r) {
		
		this.vlIntercambio = r;
		
	}
	
	public double getDolar() {
		return this.dolar;
	}
	
	public double getVlIntercambio() {
		return this.vlIntercambio;
	}
	
	public void setVlIntercambio(double real) {
		this.vlIntercambio = real;
	}
	
	public double converterDolarEmReal(double pagamento) {
	    double tot =  (pagamento * getVlIntercambio()) / 1;
		return tot;
	}
	
	public double converterRealEmDolar(double pagamento) {

		try {
			if(pagamento < getVlIntercambio()) {
				return 0;
			}else {
			    double tot =  (pagamento / getVlIntercambio());
				return Math.round(tot); 
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
     return 0;
	}
	

	
}
