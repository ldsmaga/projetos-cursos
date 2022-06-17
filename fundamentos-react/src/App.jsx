import './App.css'
import React from 'react'
import Primeiro from './components/basicos/Primeiro';
import Segundo from './components/basicos/Segundo';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import CompPai from './components/pratica/CompPai';
import PraticaPai from './components/comunicacao/Pratica2Pai';
// import Mega from './components/mega/Mega';
import Card from './components/layout/Card'
const func = () => (
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#15 - Prática Sozinho 2" color="#777">
                <PraticaPai></PraticaPai>
            </Card>

            <Card titulo="#14 - Prática Sozinho" color="#473">
                <CompPai></CompPai>
            </Card>

            <Card titulo="#13 - Contador" color="#793">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#12 - Componente Controlado (Input)" color="#539">
                <Input valor="ae"></Input>
            </Card>

            <Card titulo="#11 - Comunicação Indireta (Filho pra pai)" color="#488">
            <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#10 - Comunicação Direta (Pai pra filho)" color="#852">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#09 - Condicional" color="#623">
                <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
            </Card>

            <Card titulo="#08 - Condicional" color="#158">
                <ParOuImpar numero="10"></ParOuImpar>
            </Card>

            <Card titulo="#07 - Repetição #2" color="#807">
                <TabelaProdutos tete="oi"></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#808">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#008">
                <Familia sobrenome="Silva" teste="testando">
                    <FamiliaMembro nome="Lucas"></FamiliaMembro>
                    <FamiliaMembro nome="Mariana"></FamiliaMembro>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#080">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Exercício Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Exercício c/ Parâmetro">
                <Segundo titulo="Segundo componente" nota={6.3} />
            </Card>


            <Card titulo="#01 - Primeiro componente">
                <Primeiro />
            </Card>
        </div>
    </div>
)

export default func;