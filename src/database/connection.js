import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Treinamento from '../models/Treinamento';
import Usuario from '../models/Usuario';
import Curso from '../models/Curso';
import Video from '../models/Video';
import Comentario from '../models/Comentario';
import TreinamentoUsuario from '../models/TreinamentoUsuario';
import TreinamentoCurso from '../models/TreinamentoCurso';

const models = [
  Treinamento, Usuario, Curso, Video, Comentario, TreinamentoUsuario, TreinamentoCurso,
];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
