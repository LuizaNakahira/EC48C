import {View, Dimensions, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

import Header from '../components/Header';

const data = [
  {
    name: 'Excelente',
    quantidade: 10,
    color: '#F1CE7E',
    legendFontColor: '#fff',
    legendFontSize: 16,
  },
  {
    name: 'Bom',
    quantidade: 7,
    color: '#6994FE',
    legendFontColor: '#fff',
    legendFontSize: 16,
  },
  {
    name: 'Neutro',
    quantidade: 3,
    color: '#5FCDA4',
    legendFontColor: '#fff',
    legendFontSize: 16,
  },
  {
    name: 'Ruim',
    quantidade: 1,
    color: '#EA7288',
    legendFontColor: '#fff',
    legendFontSize: 16,
  },
  {
    name: 'Péssimo',
    quantidade: 2,
    color: '#53D8D8',
    legendFontColor: '#fff',
    legendFontSize: 16,
  },
];

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 20,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

const Relatorio = () => {
  return (
    <View style={estilos.containerGeral}>
      <Header texto="Relatório" />

      <View style={estilos.chartContainer}>
        <PieChart
          data={data}
          width={Dimensions.get('window').width}
          height={280}
          chartConfig={chartConfig}
          accessor={'quantidade'}
          backgroundColor={'transparent'}
          center={[0, 0]}
          paddingLeft={30}
          absolute
        />
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  containerGeral: {
    flex: 1,
    backgroundColor: '#372775',
    display: 'flex',
    alignItems: 'center',
  },

  chartContainer: {
    height: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Relatorio;
