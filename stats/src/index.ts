import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

// Create and object that satisfies 'DataReader' interface
const csvFileReader = new CsvFileReader('original.csv');

// Create and instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());

summary.buildAndPrintReport(matchReader.matches);
